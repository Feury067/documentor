#!/usr/bin/env node

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DocAggregator {
  constructor(configPath = './config.json', options = {}) {
    this.config = this.loadConfig(configPath);
    this.maxConcurrent = this.config.maxConcurrent || 2;
    this.delay = this.config.delay || 2000;
    this.maxDepth = this.config.maxDepth || 5;
    this.maxLinksPerPage = this.config.maxLinksPerPage || 8;
    
    // Update mode configuration
    this.updateMode = options.updateMode || this.config.updateMode || 'smart';
    this.reCrawlAfterDays = options.reCrawlAfterDays || this.config.reCrawlAfterDays || 30;
    this.checkContentHash = options.checkContentHash !== undefined ? options.checkContentHash : (this.config.checkContentHash !== undefined ? this.config.checkContentHash : true);
    this.forceUpdate = options.force || false;
    this.updateOnly = options.update || false;
    
    // Use docs/external subdirectory to match project structure
    this.outputDir = path.resolve(__dirname, '../../docs/external');
    
    // Ensure outputs directory exists
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }
  
  calculateHash(content) {
    return crypto.createHash('sha256').update(content).digest('hex');
  }

  loadConfig(configPath) {
    try {
      const configData = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(configData);
    } catch (error) {
      console.error(`Error loading config from ${configPath}:`, error.message);
      return { sites: [] };
    }
  }

  async fetchPage(url) {
    return new Promise((resolve, reject) => {
      const parsedUrl = new URL(url);
      const protocol = parsedUrl.protocol === 'https:' ? https : http;
      
      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname + parsedUrl.search,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; DocAggregator/1.0)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      };

      const req = protocol.request(options, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redirectUrl = new URL(res.headers.location, url).href;
          resolve(this.fetchPage(redirectUrl));
          return;
        }

        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(data);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.setTimeout(30000, () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.end();
    });
  }

  extractLinksFromHTML(html, baseUrl) {
    const links = new Set();
    const linkRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
      try {
        const link = new URL(match[1], baseUrl).href;
        links.add(link);
      } catch (error) {
        // Invalid URL, skip
      }
    }

    return Array.from(links);
  }

  extractTextFromHTML(html) {
    // First extract and preserve code blocks with proper formatting
    const codeBlocks = [];
    let codeBlockIndex = 0;
    
    // Remove UI elements that shouldn't be in documentation
    html = html.replace(/<button[^>]*>[\s\S]*?<\/button>/gi, '');
    html = html.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '');
    html = html.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
    html = html.replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '');
    html = html.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');
    html = html.replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, '');
    
    // Extract pre/code blocks and replace with placeholders
    html = html.replace(/<pre[^>]*>[\s\S]*?<\/pre>/gi, (match) => {
      const placeholder = `__CODE_BLOCK_${codeBlockIndex}__`;
      codeBlocks[codeBlockIndex] = this.formatCodeBlock(match);
      codeBlockIndex++;
      return placeholder;
    });
    
    // Extract standalone code blocks (not inside pre) - treat as inline
    html = html.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (match, content) => {
      // If it's multi-line or long, treat as code block
      const cleanContent = content.replace(/<[^>]+>/g, '').trim();
      if (cleanContent.includes('\n') || cleanContent.length > 50) {
        const placeholder = `__CODE_BLOCK_${codeBlockIndex}__`;
        codeBlocks[codeBlockIndex] = this.formatCodeBlock(`<pre><code>${match}</code></pre>`);
        codeBlockIndex++;
        return placeholder;
      } else {
        // Inline code
        return `\`${this.decodeHtmlEntities(cleanContent)}\``;
      }
    });
    
    // Clean HTML - preserve paragraph structure
    let text = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      // Convert headings
      .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n\n# $1\n\n')
      .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n\n## $1\n\n')
      .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n\n### $1\n\n')
      .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n\n#### $1\n\n')
      // Convert paragraphs
      .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n\n$1\n\n')
      // Convert line breaks
      .replace(/<br\s*\/?>/gi, '\n')
      // Convert lists
      .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
      .replace(/<ul[^>]*>|<\/ul>/gi, '\n')
      .replace(/<ol[^>]*>|<\/ol>/gi, '\n')
      // Remove remaining tags
      .replace(/<[^>]+>/g, ' ')
      // Clean up whitespace
      .replace(/\n{3,}/g, '\n\n')
      .replace(/[ \t]+/g, ' ')
      .trim();
    
    // Decode HTML entities
    text = this.decodeHtmlEntities(text);
    
    // Restore code blocks
    codeBlocks.forEach((block, index) => {
      text = text.replace(`__CODE_BLOCK_${index}__`, block);
    });
    
    return text;
  }

  decodeHtmlEntities(text) {
    const entities = {
      '&nbsp;': ' ',
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
      '&#x27;': "'",
      '&#x2F;': '/',
      '&#x60;': '`',
      '&#x3D;': '=',
      '&#8203;': '', // Zero-width space
      '&hellip;': '...',
      '&mdash;': '—',
      '&ndash;': '–',
      '&lsquo;': "'",
      '&rsquo;': "'",
      '&ldquo;': '"',
      '&rdquo;': '"'
    };
    
    // Replace known entities
    for (const [entity, replacement] of Object.entries(entities)) {
      text = text.replace(new RegExp(entity, 'g'), replacement);
    }
    
    // Handle numeric entities
    text = text.replace(/&#(\d+);/g, (match, num) => {
      return String.fromCharCode(parseInt(num, 10));
    });
    
    // Handle hex entities
    text = text.replace(/&#x([0-9a-f]+);/gi, (match, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    });
    
    return text;
  }

  formatCodeBlock(htmlBlock) {
    // Extract language from class attribute if present
    let language = '';
    const langMatch = htmlBlock.match(/class=["'][^"']*language-(\w+)[^"']*["']/i) ||
                     htmlBlock.match(/class=["'][^"']*lang-(\w+)[^"']*["']/i) ||
                     htmlBlock.match(/class=["'][^"']*(\w+)-code[^"']*["']/i);
    if (langMatch) {
      language = langMatch[1];
      // Normalize common languages
      if (language === 'ts') language = 'typescript';
      if (language === 'js') language = 'javascript';
    }
    
    let content = htmlBlock
      .replace(/<pre[^>]*>/, '')
      .replace(/<\/pre>/, '')
      .replace(/<code[^>]*>/, '')
      .replace(/<\/code>/, '');
    
    // Remove button elements
    content = content.replace(/<button[^>]*>[\s\S]*?<\/button>/gi, '');
    
    // Convert <br> tags to newlines in code blocks
    content = content.replace(/<br\s*\/?>/gi, '\n');
    
    // Extract clean code from span-heavy syntax highlighting
    content = this.extractCleanCode(content);
    
    // Decode entities in code
    content = this.decodeHtmlEntities(content);
    
    // Clean up extra whitespace but preserve structure
    content = content
      .replace(/^\s*\n+/, '') // Remove leading empty lines
      .replace(/\n+\s*$/, ''); // Remove trailing empty lines
    
    const langTag = language ? language : '';
    return '\n\n```' + langTag + '\n' + content + '\n```\n\n';
  }

  formatInlineCode(htmlCode) {
    let content = htmlCode
      .replace(/<code[^>]*>/, '')
      .replace(/<\/code>/, '');
    
    // Extract clean code from spans
    content = this.extractCleanCode(content);
    
    // Decode entities in inline code
    content = this.decodeHtmlEntities(content);
    
    return '`' + content.trim() + '`';
  }

  extractCleanCode(htmlWithSpans) {
    // First convert <br> tags to newlines if present
    let content = htmlWithSpans.replace(/<br\s*\/?>/gi, '\n');
    
    // Handle line-by-line span structure common in syntax highlighters
    let lines = [];
    
    // Split by span class="line" which seems to be the line wrapper
    const lineMatches = content.split(/<span[^>]*class=["'][^"']*line[^"']*["'][^>]*>/i);
    
    for (let line of lineMatches) {
      if (!line) continue;
      
      // Remove all span tags but preserve whitespace/indentation
      let cleanLine = line
        .replace(/<\/span>/g, '') // Remove closing spans
        .replace(/<span[^>]*>/g, '') // Remove opening spans
        .replace(/<[^>]+>/g, ''); // Remove any remaining HTML tags
      
      // Decode HTML entities
      cleanLine = this.decodeHtmlEntities(cleanLine);
      
      // Only trim trailing whitespace, preserve leading whitespace (indentation)
      cleanLine = cleanLine.replace(/\s+$/, '');
      
      // Skip completely empty lines but keep lines with just whitespace
      if (cleanLine !== '' || line.trim() === '') {
        lines.push(cleanLine);
      }
    }
    
    // If no line-based spans found, try general span removal
    if (lines.length === 0 || lines.every(l => !l.trim())) {
      let cleaned = content
        .replace(/<span[^>]*>/g, '') // Remove opening spans
        .replace(/<\/span>/g, '') // Remove closing spans
        .replace(/<[^>]+>/g, ''); // Remove any remaining HTML tags
      
      cleaned = this.decodeHtmlEntities(cleaned);
      return cleaned;
    }
    
    return lines.join('\n');
  }

  extractTitle(html) {
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      return titleMatch[1].trim();
    }
    
    const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    if (h1Match) {
      return this.extractTextFromHTML(h1Match[1]).trim();
    }
    
    return null;
  }

  shouldCrawlUrl(url, baseUrlPattern) {
    try {
      const urlObj = new URL(url);
      const basePatternObj = new URL(baseUrlPattern);
      
      return urlObj.hostname === basePatternObj.hostname && 
             url.startsWith(baseUrlPattern);
    } catch (error) {
      return false;
    }
  }

  loadProgress(site) {
    const progressFile = path.resolve(this.outputDir, `${site.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-progress.json`);
    
    // If force update, return empty progress
    if (this.forceUpdate) {
      console.log(`Force update enabled for ${site.name}, starting fresh`);
      return { visitedUrls: {}, processedCount: 0, lastUpdate: Date.now() };
    }
    
    try {
      if (fs.existsSync(progressFile)) {
        const data = fs.readFileSync(progressFile, 'utf8');
        const progress = JSON.parse(data);
        
        // Migrate old format (array) to new format (object with metadata)
        if (Array.isArray(progress.visitedUrls)) {
          const migrated = {};
          progress.visitedUrls.forEach(url => {
            migrated[url] = {
              lastCrawled: progress.lastUpdate || Date.now(),
              hash: null,
              title: null
            };
          });
          progress.visitedUrls = migrated;
        }
        
        return progress;
      }
    } catch (error) {
      console.log(`No valid progress file found for ${site.name}, starting fresh`);
    }
    return { visitedUrls: {}, processedCount: 0, lastUpdate: Date.now() };
  }

  saveProgress(site, visitedUrls, processedCount) {
    const progressFile = path.resolve(this.outputDir, `${site.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-progress.json`);
    const progress = {
      visitedUrls: visitedUrls instanceof Map ? Object.fromEntries(visitedUrls) : visitedUrls,
      processedCount,
      lastUpdate: Date.now(),
      site: site.name,
      updateMode: this.updateMode,
      reCrawlAfterDays: this.reCrawlAfterDays
    };
    fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
  }
  
  shouldReCrawlUrl(url, urlData, site) {
    // Get site-specific config or use global
    const siteUpdateMode = site.updateMode || this.updateMode;
    const siteReCrawlDays = site.reCrawlAfterDays || this.reCrawlAfterDays;
    const siteCheckHash = site.checkContentHash !== undefined ? site.checkContentHash : this.checkContentHash;
    
    // Force mode: always re-crawl
    if (this.forceUpdate || siteUpdateMode === 'force') {
      return { shouldCrawl: true, reason: 'force' };
    }
    
    // Never mode: never re-crawl
    if (siteUpdateMode === 'never') {
      return { shouldCrawl: false, reason: 'never' };
    }
    
    // If URL not visited before, crawl it
    if (!urlData) {
      return { shouldCrawl: true, reason: 'new' };
    }
    
    // Update-only mode: only crawl if expired or changed
    if (this.updateOnly || siteUpdateMode === 'update') {
      return this.checkUpdateNeeded(urlData, siteReCrawlDays, siteCheckHash);
    }
    
    // Smart mode: check time expiration and hash
    if (siteUpdateMode === 'smart') {
      return this.checkUpdateNeeded(urlData, siteReCrawlDays, siteCheckHash);
    }
    
    // Time mode: only check time expiration
    if (siteUpdateMode === 'time') {
      const now = Date.now();
      const lastCrawled = urlData.lastCrawled || 0;
      const reCrawlAfter = lastCrawled + (siteReCrawlDays * 24 * 60 * 60 * 1000);
      
      if (now > reCrawlAfter) {
        return { shouldCrawl: true, reason: 'time-expired' };
      }
      return { shouldCrawl: false, reason: 'time-not-expired' };
    }
    
    // Hash mode: always check hash (requires fetching)
    if (siteUpdateMode === 'hash') {
      // We'll check hash after fetching, so always crawl
      return { shouldCrawl: true, reason: 'hash-check' };
    }
    
    // Default: don't re-crawl
    return { shouldCrawl: false, reason: 'default' };
  }
  
  checkUpdateNeeded(urlData, reCrawlDays, checkHash) {
    const now = Date.now();
    const lastCrawled = urlData.lastCrawled || 0;
    const reCrawlAfter = lastCrawled + (reCrawlDays * 24 * 60 * 60 * 1000);
    
    // Check time expiration
    if (now > reCrawlAfter) {
      return { shouldCrawl: true, reason: 'time-expired' };
    }
    
    // If hash checking is disabled, don't crawl
    if (!checkHash) {
      return { shouldCrawl: false, reason: 'time-not-expired' };
    }
    
    // Hash will be checked after fetch
    return { shouldCrawl: true, reason: 'hash-check-needed' };
  }

  initializeOutputFile(site) {
    const filename = site.outputFile || `${site.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-docs.md`;
    const fullPath = path.resolve(this.outputDir, filename);
    
    // Create directory structure if it doesn't exist
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    if (!fs.existsSync(fullPath)) {
      let header = `# ${site.name} Documentation\n\n`;
      header += `Generated on: ${new Date().toISOString()}\n`;
      header += `Base URL: ${site.startUrl}\n`;
      header += `URL Pattern: ${site.urlPattern}\n\n`;
      header += `## Documentation Content\n\n`;
      
      fs.writeFileSync(fullPath, header);
      console.log(`Created output file: ${fullPath}`);
    }
    
    return fullPath;
  }

  formatSection(pageData, isUpdate = false) {
    const timestamp = new Date().toISOString();
    let content = `### ${pageData.title}\n\n`;
    content += `**Source:** ${pageData.url}\n`;
    if (isUpdate) {
      content += `**Updated:** ${timestamp}\n`;
      if (pageData.previousCrawled) {
        content += `**Previous:** ${pageData.previousCrawled}\n`;
      }
    } else {
      content += `**Crawled:** ${timestamp}\n`;
    }
    content += `\n${pageData.content}\n\n`;
    content += `---\n\n`;
    return content;
  }

  appendToOutputFile(filename, pageData) {
    const content = this.formatSection(pageData, false);
    fs.appendFileSync(filename, content);
  }
  
  replaceInOutputFile(filename, url, pageData, previousData) {
    // Read current file content
    let content = fs.readFileSync(filename, 'utf8');
    
    // Escape URL for regex (handle special regex characters)
    const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Pattern: Find section starting with ### that contains this URL
    // Match from ### Title to next ### or end of file
    // Handles both formats: with and without --- separators
    const pattern = new RegExp(
      `(### [^\\n]+\\n\\n\\*\\*Source:\\*\\*\\s+${escapedUrl}[\\s\\S]*?)(?=\\n### |\\n---\\n|$)`,
      'g'
    );
    
    // Format new section
    const newSection = this.formatSection({
      ...pageData,
      previousCrawled: previousData?.lastCrawled ? new Date(previousData.lastCrawled).toISOString() : null
    }, true);
    
    // Remove trailing ---\n\n from new section if we're inserting before separator
    const cleanNewSection = newSection.replace(/\n---\n\n$/, '\n');
    
    // Check if section exists
    const matches = content.match(pattern);
    
    if (matches && matches.length > 0) {
      // Replace existing section(s) - keep only the last match if multiple
      // This handles duplicate entries by replacing all with single new one
      let replaced = false;
      content = content.replace(pattern, (match) => {
        if (!replaced) {
          replaced = true;
          return cleanNewSection;
        }
        return ''; // Remove duplicates
      });
      
      // Clean up any double separators or extra whitespace
      content = content.replace(/\n---\n\n---\n/g, '\n---\n');
      content = content.replace(/\n{3,}/g, '\n\n');
    } else {
      // Append new section if not found
      // Ensure we have a separator before appending
      if (!content.trim().endsWith('---')) {
        content = content.trim() + '\n---\n\n';
      }
      content += newSection;
    }
    
    fs.writeFileSync(filename, content);
  }
  
  updateOutputFile(filename, url, pageData, previousData) {
    this.replaceInOutputFile(filename, url, pageData, previousData);
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async crawlSite(site) {
    console.log(`\n=== Crawling ${site.name} ===`);
    console.log(`Target: ${site.startUrl}`);
    console.log(`Pattern: ${site.urlPattern}`);
    console.log(`Update Mode: ${site.updateMode || this.updateMode}`);
    console.log(`Re-crawl After: ${site.reCrawlAfterDays || this.reCrawlAfterDays} days\n`);
    
    const progress = this.loadProgress(site);
    const visitedUrls = progress.visitedUrls || {};
    let processedCount = progress.processedCount || 0;
    
    const siteUpdateMode = site.updateMode || this.updateMode;
    const isUpdateMode = this.updateOnly || siteUpdateMode === 'update' || siteUpdateMode === 'smart';
    
    if (isUpdateMode && Object.keys(visitedUrls).length > 0) {
      console.log(`Update mode: Checking ${Object.keys(visitedUrls).length} previously visited pages for updates`);
    } else {
      console.log(`Starting fresh crawl (${processedCount} previously processed pages)`);
    }
    
    const outputFile = this.initializeOutputFile(site);
    const queue = [{ url: site.startUrl, depth: 0 }];
    let successCount = 0;
    let updateCount = 0;
    let skipCount = 0;
    let failCount = 0;

    while (queue.length > 0) {
      const { url, depth } = queue.shift();
      
      if (depth > this.maxDepth) {
        continue;
      }

      // Check if we should crawl this URL
      const urlData = visitedUrls[url];
      const crawlDecision = this.shouldReCrawlUrl(url, urlData, site);
      
      if (!crawlDecision.shouldCrawl && urlData) {
        skipCount++;
        if (skipCount % 10 === 0) {
          console.log(`    ⏭️  Skipped ${skipCount} unchanged pages...`);
        }
        continue;
      }

      processedCount++;
      const isUpdate = urlData !== undefined;
      
      console.log(`[${processedCount}] ${'  '.repeat(depth)}${isUpdate ? '🔄 Updating' : '📄 Crawling'}: ${url} (${crawlDecision.reason})`);

      try {
        const html = await this.fetchPage(url);
        const text = this.extractTextFromHTML(html);
        const title = this.extractTitle(html) || url;
        const contentHash = this.calculateHash(text);
        const now = Date.now();
        
        // Check if content actually changed (for hash mode or smart mode)
        if (urlData && urlData.hash && urlData.hash === contentHash) {
          console.log(`    ⏭️  Content unchanged, skipping`);
          skipCount++;
          // Update last checked time but keep existing data
          visitedUrls[url] = {
            ...urlData,
            lastChecked: now
          };
          continue;
        }
        
        const pageData = {
          url,
          title,
          content: text,
          success: true,
          hash: contentHash
        };

        if (isUpdate && urlData) {
          this.updateOutputFile(outputFile, url, pageData, urlData);
          updateCount++;
          console.log(`    ✅ Updated: ${title}`);
        } else {
          this.appendToOutputFile(outputFile, pageData);
          successCount++;
          console.log(`    ✅ Added: ${title}`);
        }
        
        // Update visited URLs with new metadata
        visitedUrls[url] = {
          lastCrawled: now,
          hash: contentHash,
          title: title,
          url: url
        };

        if (depth < this.maxDepth) {
          const links = this.extractLinksFromHTML(html, url);
          const validLinks = links.filter(link => {
            if (!this.shouldCrawlUrl(link, site.urlPattern)) {
              return false;
            }
            // In update mode, allow re-checking links
            if (isUpdateMode) {
              return true;
            }
            // In normal mode, skip already visited
            return !visitedUrls[link];
          });

          for (const link of validLinks.slice(0, this.maxLinksPerPage)) {
            queue.push({ url: link, depth: depth + 1 });
          }
        }

        if (processedCount % 5 === 0) {
          this.saveProgress(site, visitedUrls, processedCount);
        }

        await this.sleep(this.delay);

      } catch (error) {
        console.error(`    ❌ Failed: ${error.message}`);
        failCount++;
      }
    }

    this.saveProgress(site, visitedUrls, processedCount);
    
    console.log(`\n✅ Completed ${site.name}:`);
    console.log(`   - New pages: ${successCount}`);
    console.log(`   - Updated pages: ${updateCount}`);
    console.log(`   - Skipped (unchanged): ${skipCount}`);
    console.log(`   - Failed: ${failCount}`);
    console.log(`   - Output file: ${outputFile}`);
    
    const stats = fs.statSync(outputFile);
    console.log(`   - File size: ${(stats.size / 1024).toFixed(1)}KB`);
  }

  async run() {
    const sites = this.config.sites || [];
    if (sites.length === 0) {
      console.error('No sites configured. Please add sites to config.json');
      return;
    }

    console.log('🚀 Starting Documentation Aggregation');
    console.log('=====================================');
    
    for (const site of sites) {
      await this.crawlSite(site);
    }
    
    console.log('\n🎉 All documentation sites processed!');
    console.log('\nGenerated files:');
    for (const site of sites) {
      const filename = site.outputFile || `${site.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-docs.md`;
      const fullPath = path.resolve(this.outputDir, filename);
      if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        console.log(`   - ${filename} (${(stats.size / 1024).toFixed(1)}KB)`);
      }
    }
  }
}

// CLI usage
const isMainModule = import.meta.url === `file://${process.argv[1]}` || 
                     process.argv[1]?.includes('fetch-docs.js') ||
                     import.meta.url.endsWith('fetch-docs.js');

if (isMainModule) {
  // Parse CLI arguments
  const args = process.argv.slice(2);
  let configPath = './config.json';
  const options = {
    force: false,
    update: false,
    updateMode: null,
    reCrawlAfterDays: null,
    checkContentHash: null
  };
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--force' || arg === '-f') {
      options.force = true;
    } else if (arg === '--update' || arg === '-u') {
      options.update = true;
    } else if (arg === '--mode' && i + 1 < args.length) {
      options.updateMode = args[++i];
    } else if (arg === '--days' && i + 1 < args.length) {
      options.reCrawlAfterDays = parseInt(args[++i], 10);
    } else if (arg === '--no-hash') {
      options.checkContentHash = false;
    } else if (arg === '--hash') {
      options.checkContentHash = true;
    } else if (!arg.startsWith('--') && !arg.startsWith('-')) {
      configPath = arg;
    }
  }
  
  const aggregator = new DocAggregator(configPath, options);
  
  if (options.force) {
    console.log('⚠️  Force update mode: All pages will be re-crawled');
  } else if (options.update) {
    console.log('🔄 Update mode: Only changed/expired pages will be re-crawled');
  }
  
  process.on('SIGINT', () => {
    console.log('\n\n🛑 Received interrupt signal. Progress has been saved.');
    console.log('You can resume by running the command again.');
    process.exit(0);
  });
  
  aggregator.run().catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
  });
}

export default DocAggregator;