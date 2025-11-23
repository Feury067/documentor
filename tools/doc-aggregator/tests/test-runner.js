#!/usr/bin/env node

/**
 * Test Runner for Doc Aggregator
 * 
 * Runs all tests in the tests directory
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testsDir = __dirname;
const rootDir = path.resolve(__dirname, '..');

const results = {
  passed: 0,
  failed: 0,
  skipped: 0,
  tests: []
};

function log(message, type = 'info') {
  const prefix = {
    'pass': '✅',
    'fail': '❌',
    'warn': '⚠️',
    'info': 'ℹ️',
    'test': '🧪'
  }[type] || 'ℹ️';
  console.log(`${prefix} ${message}`);
}

function runTest(testFile) {
  return new Promise((resolve) => {
    log(`Running ${path.basename(testFile)}...`, 'test');
    
    const proc = spawn('node', [testFile], {
      cwd: rootDir,
      stdio: 'pipe',
      shell: false
    });

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    proc.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (code) => {
      const result = {
        file: path.basename(testFile),
        passed: code === 0,
        exitCode: code,
        stdout,
        stderr
      };
      
      if (code === 0) {
        results.passed++;
        log(`${path.basename(testFile)} PASSED`, 'pass');
      } else {
        results.failed++;
        log(`${path.basename(testFile)} FAILED (exit code: ${code})`, 'fail');
        if (stderr) {
          console.log(stderr);
        }
      }
      
      results.tests.push(result);
      resolve(result);
    });

    proc.on('error', (error) => {
      results.failed++;
      log(`${path.basename(testFile)} ERROR: ${error.message}`, 'fail');
      results.tests.push({
        file: path.basename(testFile),
        passed: false,
        error: error.message
      });
      resolve({ passed: false, error: error.message });
    });
  });
}

async function main() {
  console.log('\n🧪 Doc Aggregator Test Suite\n');
  console.log('='.repeat(60) + '\n');

  // Find all test files
  const testFiles = fs.readdirSync(testsDir)
    .filter(file => file.startsWith('test-') && file.endsWith('.js'))
    .map(file => path.join(testsDir, file))
    .sort();

  if (testFiles.length === 0) {
    log('No test files found!', 'warn');
    process.exit(1);
  }

  log(`Found ${testFiles.length} test file(s)\n`, 'info');

  // Run tests sequentially
  for (const testFile of testFiles) {
    await runTest(testFile);
    console.log(''); // Blank line between tests
  }

  // Summary
  console.log('='.repeat(60));
  console.log('\n📊 Test Summary\n');
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`⏭️  Skipped: ${results.skipped}`);
  console.log(`📝 Total: ${results.passed + results.failed + results.skipped}\n`);

  if (results.failed > 0) {
    console.log('Failed tests:');
    results.tests
      .filter(t => !t.passed)
      .forEach(t => {
        console.log(`  - ${t.file}`);
        if (t.error) console.log(`    Error: ${t.error}`);
      });
    console.log('');
    process.exit(1);
  } else {
    log('🎉 All tests passed!', 'pass');
    console.log('');
    process.exit(0);
  }
}

main().catch(error => {
  log(`Fatal error: ${error.message}`, 'fail');
  console.error(error);
  process.exit(1);
});

