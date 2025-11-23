// Direct execution script
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptPath = path.join(__dirname, 'fetch-docs.js');
const nodePath = process.execPath;

console.log('Executing:', nodePath, scriptPath);
console.log('Working directory:', __dirname);

const child = spawn(nodePath, [scriptPath], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: false
});

child.on('error', (error) => {
  console.error('Spawn error:', error);
});

child.on('exit', (code) => {
  console.log('Process exited with code:', code);
  process.exit(code);
});

