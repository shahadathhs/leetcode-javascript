import { execSync } from 'child_process';
import chalk from 'chalk';

const problemNumber = process.argv[2];

if (!problemNumber) {
  console.error(chalk.red.bold('❌ Please provide a problem number (e.g. 2618)'));
  process.exit(1);
}

try {
  console.log(chalk.blue(`🚀 Running tests for problem ${chalk.bold(problemNumber)}...\n`));
  execSync(`pnpm jest --testPathPatterns=${problemNumber}`, { stdio: 'inherit' });
} catch (err) {
  console.error(chalk.red.bold('❌ Test run failed.'));
  console.error(chalk.red(err));
  process.exit(1);
}
