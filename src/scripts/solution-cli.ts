import { readdirSync } from 'fs';
import { resolve } from 'path';
import { pathToFileURL } from 'url';
import chalk from 'chalk';

const APP_DIR = resolve(__dirname, '../app');

async function runSolutions() {
  console.clear();
  console.log(chalk.green.bold('\n📘 LeetCode Solution Runner CLI\n'));

  const files = readdirSync(APP_DIR).filter(file => file.endsWith('.ts'));

  for (const file of files) {
    const filePath = resolve(APP_DIR, file);
    const fileURL = pathToFileURL(filePath).href;

    console.log(chalk.cyan(`\n🔹 Running: ${file}`));
    try {
      await import(fileURL);
      console.log(chalk.gray(`✅ ${file} executed without error.`));
    } catch (err) {
      console.error(chalk.red(`❌ Error in ${file}`));
      console.error(err);
    }
  }

  console.log(chalk.green.bold('\n✅ Finished running all solution files.\n'));
}

runSolutions();
