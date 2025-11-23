#!/usr/bin/env node
// Direct runner that ensures correct paths
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import DocAggregator from './fetch-docs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Change to script directory
process.chdir(__dirname);

const configPath = path.join(__dirname, 'config.json');

console.log('Working directory:', process.cwd());
console.log('Config path:', configPath);
console.log('Config exists:', fs.existsSync(configPath));

const aggregator = new DocAggregator(configPath);
console.log('Output directory:', aggregator.outputDir);
console.log('Output directory exists:', fs.existsSync(aggregator.outputDir));

aggregator.run().catch(error => {
  console.error('Fatal error:', error);
  console.error(error.stack);
  process.exit(1);
});

