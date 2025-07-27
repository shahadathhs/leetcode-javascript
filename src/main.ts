import chalk from 'chalk'

function main() {
  console.clear()
  console.log(
    chalk.green.bold('\n🚀 Welcome to ') + chalk.blueBright.bold('LeetCode JavaScript Practice!\n'),
  )

  console.log(
    chalk.gray('📚 This is a curated collection of LeetCode problems with:') +
      '\n' +
      chalk.cyan('  • JavaScript-only solutions') +
      '\n' +
      chalk.cyan('  • Clear explanations') +
      '\n' +
      chalk.cyan('  • Concept-based tagging for deep learning\n'),
  )

  console.log(
    chalk.yellow('✨ Run ') +
      chalk.magenta('pnpm test') +
      chalk.yellow(' to test all problems or ') +
      chalk.magenta('pnpm test:problem') +
      chalk.yellow(' to run a specific one.\n'),
  )

  console.log(chalk.green('Happy coding! 💻\n'))
}

main()
