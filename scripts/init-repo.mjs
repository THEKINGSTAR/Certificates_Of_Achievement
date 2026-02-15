import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

console.log('[v0] Starting repository initialization...');
console.log('[v0] Project root:', projectRoot);

try {
  // Change to project directory
  process.chdir(projectRoot);

  // Check if git is already initialized
  if (!fs.existsSync(path.join(projectRoot, '.git'))) {
    console.log('[v0] Initializing git repository...');
    execSync('git init', { stdio: 'inherit' });
  } else {
    console.log('[v0] Git repository already initialized');
  }

  // Configure git user if needed
  try {
    execSync('git config user.name', { stdio: 'pipe' });
  } catch {
    console.log('[v0] Setting git user...');
    execSync('git config user.name "v0 Deploy"', { stdio: 'inherit' });
    execSync('git config user.email "deploy@v0.dev"', { stdio: 'inherit' });
  }

  // Add all files
  console.log('[v0] Adding files to git...');
  execSync('git add .', { stdio: 'inherit' });

  // Check if there are changes to commit
  try {
    execSync('git diff-index --quiet HEAD', { stdio: 'pipe' });
    console.log('[v0] No changes to commit');
  } catch {
    console.log('[v0] Committing changes...');
    execSync('git commit -m "Initial certificate portfolio website"', { stdio: 'inherit' });
  }

  console.log('[v0] Repository initialized successfully!');
  console.log('[v0] Ready for deployment to Vercel');

} catch (error) {
  console.error('[v0] Error during repository initialization:', error.message);
  process.exit(1);
}
