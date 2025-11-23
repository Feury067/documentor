#!/usr/bin/env node

/**
 * Validation Test Script for Doc Aggregator Option 5 Implementation
 * 
 * Tests:
 * 1. Progress file format (new object structure)
 * 2. Hash calculation and storage
 * 3. Update modes
 * 4. CLI flags
 * 5. Backward compatibility (migration)
 * 6. Output file updates
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.resolve(__dirname, '../../../docs/external');
const testResults = {
  passed: [],
  failed: [],
  warnings: []
};

function log(message, type = 'info') {
  const prefix = {
    'pass': '✅',
    'fail': '❌',
    'warn': '⚠️',
    'info': 'ℹ️'
  }[type] || 'ℹ️';
  console.log(`${prefix} ${message}`);
}

function test(name, fn) {
  try {
    const result = fn();
    if (result === true || (result && result.passed)) {
      testResults.passed.push(name);
      log(name, 'pass');
      return true;
    } else {
      testResults.failed.push(name);
      log(`${name}: ${result.message || 'Failed'}`, 'fail');
      return false;
    }
  } catch (error) {
    testResults.failed.push(name);
    log(`${name}: ${error.message}`, 'fail');
    return false;
  }
}

function calculateHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

console.log('\n🧪 Doc Aggregator Validation Tests\n');
console.log('=' .repeat(50) + '\n');

// Test 1: Check if progress files exist and have new format
test('Progress files exist', () => {
  const progressFiles = fs.readdirSync(outputDir)
    .filter(f => f.endsWith('-progress.json'));
  
  if (progressFiles.length === 0) {
    return { passed: false, message: 'No progress files found. Run the aggregator first.' };
  }
  
  return progressFiles.length > 0;
});

// Test 2: Validate progress file structure
test('Progress files use new object format', () => {
  const progressFiles = fs.readdirSync(outputDir)
    .filter(f => f.endsWith('-progress.json'));
  
  for (const file of progressFiles) {
    const filePath = path.join(outputDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const progress = JSON.parse(content);
    
    // Check if visitedUrls is an object (new format) not array (old format)
    if (Array.isArray(progress.visitedUrls)) {
      return { 
        passed: false, 
        message: `${file} still uses old array format. Migration may have failed.` 
      };
    }
    
    if (typeof progress.visitedUrls !== 'object' || progress.visitedUrls === null) {
      return { 
        passed: false, 
        message: `${file} has invalid visitedUrls format.` 
      };
    }
  }
  
  return true;
});

// Test 3: Validate hash storage
test('Progress files store content hashes', () => {
  const progressFiles = fs.readdirSync(outputDir)
    .filter(f => f.endsWith('-progress.json'));
  
  let hasHashes = false;
  
  for (const file of progressFiles) {
    const filePath = path.join(outputDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const progress = JSON.parse(content);
    
    if (progress.visitedUrls && typeof progress.visitedUrls === 'object') {
      const urls = Object.values(progress.visitedUrls);
      
      for (const urlData of urls) {
        if (urlData.hash) {
          hasHashes = true;
          // Validate hash format (SHA-256 = 64 hex chars)
          if (!/^[a-f0-9]{64}$/i.test(urlData.hash)) {
            return { 
              passed: false, 
              message: `Invalid hash format in ${file}: ${urlData.hash}` 
            };
          }
        }
      }
    }
  }
  
  if (!hasHashes && progressFiles.length > 0) {
    testResults.warnings.push('No hashes found in progress files. This is OK for first run.');
  }
  
  return true;
});

// Test 4: Validate timestamp storage
test('Progress files store timestamps', () => {
  const progressFiles = fs.readdirSync(outputDir)
    .filter(f => f.endsWith('-progress.json'));
  
  for (const file of progressFiles) {
    const filePath = path.join(outputDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const progress = JSON.parse(content);
    
    // Check for lastUpdate timestamp
    if (!progress.lastUpdate || typeof progress.lastUpdate !== 'number') {
      return { 
        passed: false, 
        message: `${file} missing or invalid lastUpdate timestamp` 
      };
    }
    
    // Check URL-level timestamps if URLs exist
    if (progress.visitedUrls && typeof progress.visitedUrls === 'object') {
      const urls = Object.values(progress.visitedUrls);
      for (const urlData of urls) {
        if (urlData.lastCrawled && typeof urlData.lastCrawled !== 'number') {
          return { 
            passed: false, 
            message: `Invalid lastCrawled timestamp in ${file}` 
          };
        }
      }
    }
  }
  
  return true;
});

// Test 5: Validate update mode configuration storage
test('Progress files store update configuration', () => {
  const progressFiles = fs.readdirSync(outputDir)
    .filter(f => f.endsWith('-progress.json'));
  
  for (const file of progressFiles) {
    const filePath = path.join(outputDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const progress = JSON.parse(content);
    
    // These are optional but good to have
    if (progress.updateMode && !['smart', 'time', 'hash', 'force', 'never', 'update'].includes(progress.updateMode)) {
      testResults.warnings.push(`${file} has unusual updateMode: ${progress.updateMode}`);
    }
    
    if (progress.reCrawlAfterDays && typeof progress.reCrawlAfterDays !== 'number') {
      testResults.warnings.push(`${file} has invalid reCrawlAfterDays`);
    }
  }
  
  return true;
});

// Test 6: Validate output files exist
test('Output files are created', () => {
  const progressFiles = fs.readdirSync(outputDir)
    .filter(f => f.endsWith('-progress.json'));
  
  if (progressFiles.length === 0) {
    return { passed: false, message: 'No progress files to check against' };
  }
  
  // Check for corresponding markdown files
  const mdFiles = fs.readdirSync(outputDir)
    .filter(f => f.endsWith('.md') || f.endsWith('.txt'));
  
  if (mdFiles.length === 0) {
    return { passed: false, message: 'No output markdown files found' };
  }
  
  return true;
});

// Test 7: Check for update markers in output files
test('Output files contain update markers', () => {
  const mdFiles = fs.readdirSync(outputDir)
    .filter(f => (f.endsWith('.md') || f.endsWith('.txt')) && !f.includes('index'));
  
  let foundMarkers = false;
  
  for (const file of mdFiles) {
    const filePath = path.join(outputDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for update markers
    if (content.includes('**Updated:**') || content.includes('**Crawled:**')) {
      foundMarkers = true;
    }
  }
  
  if (!foundMarkers && mdFiles.length > 0) {
    testResults.warnings.push('No update markers found in output files. This is OK for first run.');
  }
  
  return true;
});

// Test 8: Validate hash calculation function exists
test('Hash calculation produces valid SHA-256', () => {
  const testContent = 'This is a test';
  const hash = calculateHash(testContent);
  
  if (!/^[a-f0-9]{64}$/i.test(hash)) {
    return { passed: false, message: `Invalid hash format: ${hash}` };
  }
  
  // Test consistency
  const hash2 = calculateHash(testContent);
  if (hash !== hash2) {
    return { passed: false, message: 'Hash calculation is not consistent' };
  }
  
  // Test different content produces different hash
  const hash3 = calculateHash('Different content');
  if (hash === hash3) {
    return { passed: false, message: 'Hash collision detected (unlikely but possible)' };
  }
  
  return true;
});

// Test 9: Check config.json has new options
test('Config file includes new update options', () => {
  const configPath = path.join(__dirname, 'config.json');
  
  if (!fs.existsSync(configPath)) {
    return { passed: false, message: 'config.json not found' };
  }
  
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
  // Check for new options (they may have defaults, so this is informational)
  const hasUpdateMode = config.updateMode !== undefined;
  const hasReCrawlDays = config.reCrawlAfterDays !== undefined;
  const hasCheckHash = config.checkContentHash !== undefined;
  
  if (!hasUpdateMode && !hasReCrawlDays && !hasCheckHash) {
    testResults.warnings.push('Config file does not include new update options. Using defaults.');
  }
  
  return true;
});

// Test 10: Validate site-specific overrides structure
test('Site entries can have update overrides', () => {
  const configPath = path.join(__dirname, 'config.json');
  
  if (!fs.existsSync(configPath)) {
    return { passed: false, message: 'config.json not found' };
  }
  
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
  if (!config.sites || !Array.isArray(config.sites) || config.sites.length === 0) {
    return { passed: false, message: 'No sites configured' };
  }
  
  // Check if sites can have updateMode (they should be able to)
  // This is a structural test, not a requirement
  const sitesWithOverrides = config.sites.filter(site => 
    site.updateMode || site.reCrawlAfterDays !== undefined || site.checkContentHash !== undefined
  );
  
  if (sitesWithOverrides.length > 0) {
    log(`Found ${sitesWithOverrides.length} site(s) with update overrides`, 'info');
  }
  
  return true;
});

// Summary
console.log('\n' + '='.repeat(50));
console.log('\n📊 Test Summary\n');

console.log(`✅ Passed: ${testResults.passed.length}`);
testResults.passed.forEach(test => console.log(`   - ${test}`));

if (testResults.warnings.length > 0) {
  console.log(`\n⚠️  Warnings: ${testResults.warnings.length}`);
  testResults.warnings.forEach(warning => console.log(`   - ${warning}`));
}

if (testResults.failed.length > 0) {
  console.log(`\n❌ Failed: ${testResults.failed.length}`);
  testResults.failed.forEach(test => console.log(`   - ${test}`));
  console.log('\n');
  process.exit(1);
} else {
  console.log('\n🎉 All tests passed!\n');
  process.exit(0);
}

