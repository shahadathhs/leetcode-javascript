import { execSync } from 'child_process';

const problemNumber = process.argv[2];

if (!problemNumber) {
  console.error('❌ Please provide a problem number (e.g. 2618)');
  process.exit(1);
}

try {
  execSync(`pnpm jest --testPathPatterns=${problemNumber}`, { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Test run failed.', err);
  process.exit(1);
}
