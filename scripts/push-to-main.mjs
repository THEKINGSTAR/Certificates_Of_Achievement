import { execSync } from 'child_process';

try {
  console.log('🚀 Starting push to main branch...\n');

  // Configure git
  execSync('git config user.email "portfolio@certificates.dev"', { stdio: 'inherit' });
  execSync('git config user.name "Certificate Portfolio Builder"', { stdio: 'inherit' });

  // Add all changes
  console.log('\n📝 Adding all files...');
  execSync('git add .', { stdio: 'inherit' });

  // Commit changes
  console.log('\n💾 Committing changes...');
  const commitMessage = `feat: organize certificates and create stunning portfolio website

- Organized all certificates into 7 category folders with detailed READMEs
- Created responsive Next.js portfolio website
- Added hero section showcasing learning journey
- Implemented certificate gallery with filterable categories
- Added timeline visualization of learning progression
- Included skills showcase section
- Deployed with modern design and smooth animations`;

  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

  // Push to main branch
  console.log('\n⬆️  Pushing to main branch...');
  execSync('git push origin main', { stdio: 'inherit' });

  console.log('\n✅ Successfully pushed to main branch!');
  process.exit(0);
} catch (error) {
  console.error('\n❌ Error during push:', error.message);
  process.exit(1);
}
