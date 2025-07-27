import inquirer from 'inquirer';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';

const APP_DIR = resolve(__dirname, '../app');

function getProblemChoices() {
  return readdirSync(APP_DIR)
    .filter(file => file.endsWith('.ts'))
    .map(file => {
      const [number, ...titleParts] = file.replace('.ts', '').split('-');
      const title = titleParts.join(' ');
      return {
        name: `${chalk.cyan.bold(number)} - ${title}`,
        value: number,
      };
    });
}

async function run() {
  console.clear();
  console.log(
    chalk.green.bold('\n🧠 LeetCode JavaScript Practice CLI\n')
  );

  const { problemNumber } = await inquirer.prompt([
    {
      type: 'list',
      name: 'problemNumber',
      message: 'Select a problem to test:',
      choices: getProblemChoices(),
    },
  ]);

  console.log(chalk.gray(`\n▶ Running tests for Problem ${problemNumber}...\n`));
  try {
    execSync(`pnpm test:problem ${problemNumber}`, { stdio: 'inherit' });
  } catch {
    console.error(chalk.red('❌ Test run failed.'));
  }
}

run();
