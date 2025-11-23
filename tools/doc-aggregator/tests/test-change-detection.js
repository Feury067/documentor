#!/usr/bin/env node

/**
 * Test Change Detection
 * 
 * 1. Crawls MDN Web APIs documentation
 * 2. Modifies a hash in the progress file to simulate a change
 * 3. Runs update mode
 * 4. Verifies the change was detected and page was re-crawled
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.resolve(__dirname, '../../../docs/external');
const configPath = path.join(__dirname, 'test-config-mdn.json');
// Progress file name is sanitized from site name: "MDN Web APIs" -> "mdn-web-apis"
const progressFileName = 'mdn-web-apis-progress.json';
const progressFilePath = path.join(outputDir, progressFileName);

function log(message, type = 'info') {
  const prefix = {
    'pass': '✅',
    'fail': '❌',
    'warn': '⚠️',
    'info': 'ℹ️',
    'step': '📋'
  }[type] || 'ℹ️';
  console.log(`${prefix} ${message}`);
}

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      ...options,
      stdio: 'inherit',
      shell: false
    });

    proc.on('close', (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });

    proc.on('error', (error) => {
      reject(error);
    });
  });
}

async function main() {
  console.log('\n🧪 Testing Change Detection with MDN Web APIs\n');
  console.log('='.repeat(60) + '\n');

  // Step 1: Initial crawl
  log('Step 1: Running initial crawl...', 'step');
  try {
    await runCommand('node', ['fetch-docs.js', configPath, '--force'], {
      cwd: path.resolve(__dirname, '..')
    });
    log('Initial crawl completed', 'pass');
  } catch (error) {
    log(`Initial crawl failed: ${error.message}`, 'fail');
    process.exit(1);
  }

  // Step 2: Check progress file exists
  log('\nStep 2: Checking progress file...', 'step');
  if (!fs.existsSync(progressFilePath)) {
    log('Progress file not found!', 'fail');
    process.exit(1);
  }
  log('Progress file found', 'pass');

  // Step 3: Read and analyze progress file
  log('\nStep 3: Analyzing progress file...', 'step');
  const progressContent = fs.readFileSync(progressFilePath, 'utf8');
  const progress = JSON.parse(progressContent);

  if (!progress.visitedUrls || Object.keys(progress.visitedUrls).length === 0) {
    log('No URLs found in progress file', 'fail');
    process.exit(1);
  }

  const urls = Object.keys(progress.visitedUrls);
  log(`Found ${urls.length} URLs in progress file`, 'pass');

  // Pick first URL to modify
  const testUrl = urls[0];
  const originalData = progress.visitedUrls[testUrl];
  
  log(`\nSelected test URL: ${testUrl}`, 'info');
  log(`Original hash: ${originalData.hash?.substring(0, 16)}...`, 'info');
  log(`Last crawled: ${new Date(originalData.lastCrawled).toISOString()}`, 'info');

  // Step 4: Modify hash to simulate change
  log('\nStep 4: Modifying hash to simulate content change...', 'step');
  const fakeHash = '0000000000000000000000000000000000000000000000000000000000000000';
  progress.visitedUrls[testUrl].hash = fakeHash;
  
  // Also set lastCrawled to be old enough to trigger time check
  progress.visitedUrls[testUrl].lastCrawled = Date.now() - (2 * 24 * 60 * 60 * 1000); // 2 days ago
  
  fs.writeFileSync(progressFilePath, JSON.stringify(progress, null, 2));
  log(`Modified hash to: ${fakeHash.substring(0, 16)}...`, 'pass');
  log('Set lastCrawled to 2 days ago (will trigger time check)', 'info');

  // Step 5: Run update mode
  log('\nStep 5: Running update mode...', 'step');
  log('This should detect the hash change and re-crawl the page', 'info');
  
  try {
    await runCommand('node', ['fetch-docs.js', configPath, '--update'], {
      cwd: path.resolve(__dirname, '..')
    });
    log('Update mode completed', 'pass');
  } catch (error) {
    log(`Update mode failed: ${error.message}`, 'fail');
    process.exit(1);
  }

  // Step 6: Verify the change was detected
  log('\nStep 6: Verifying change was detected...', 'step');
  
  const updatedProgressContent = fs.readFileSync(progressFilePath, 'utf8');
  const updatedProgress = JSON.parse(updatedProgressContent);
  const updatedData = updatedProgress.visitedUrls[testUrl];

  if (!updatedData) {
    log('Test URL not found in updated progress file!', 'fail');
    process.exit(1);
  }

  const hashChanged = updatedData.hash !== fakeHash;
  const timestampUpdated = updatedData.lastCrawled > progress.visitedUrls[testUrl].lastCrawled;

  if (hashChanged) {
    log(`Hash was updated: ${updatedData.hash.substring(0, 16)}...`, 'pass');
    log('✅ Change detection WORKING - hash was recalculated!', 'pass');
  } else {
    log('Hash was not updated - change may not have been detected', 'warn');
  }

  if (timestampUpdated) {
    log(`Timestamp was updated: ${new Date(updatedData.lastCrawled).toISOString()}`, 'pass');
    log('✅ Change detection WORKING - page was re-crawled!', 'pass');
  } else {
    log('Timestamp was not updated - page may not have been re-crawled', 'warn');
  }

  // Step 7: Check output file for update markers
  log('\nStep 7: Checking output file for update markers...', 'step');
  const outputFile = path.join(outputDir, 'mdn-web-api-test.md');
  
  if (fs.existsSync(outputFile)) {
    const outputContent = fs.readFileSync(outputFile, 'utf8');
    const hasUpdateMarker = outputContent.includes('**Updated:**');
    const hasPreviousMarker = outputContent.includes('**Previous:**');
    
    if (hasUpdateMarker || hasPreviousMarker) {
      log('Found update markers in output file', 'pass');
      log('✅ Output file update WORKING!', 'pass');
    } else {
      log('No update markers found (may be first update)', 'warn');
    }
  } else {
    log('Output file not found', 'warn');
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 Test Summary\n');
  
  if (hashChanged && timestampUpdated) {
    log('🎉 SUCCESS: Change detection is working correctly!', 'pass');
    log('   - Hash was recalculated', 'pass');
    log('   - Page was re-crawled', 'pass');
    log('   - Timestamp was updated', 'pass');
    console.log('\n');
    process.exit(0);
  } else {
    log('⚠️  PARTIAL: Some checks passed but others may need investigation', 'warn');
    console.log('\n');
    process.exit(1);
  }
}

main().catch(error => {
  log(`Fatal error: ${error.message}`, 'fail');
  console.error(error);
  process.exit(1);
});

