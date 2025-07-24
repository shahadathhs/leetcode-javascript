import { argv } from 'process';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import fs from 'fs/promises';
import tsConfigPaths, { createMatchPath } from 'tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = path.resolve(__dirname, '..');

async function loadTsConfig() {
  const tsconfigPath = path.join(baseUrl, 'tsconfig.json');
  const tsconfigRaw = await fs.readFile(tsconfigPath, 'utf-8');
  return JSON.parse(tsconfigRaw);
}

interface TsConfig {
  compilerOptions: {
    baseUrl: string;
    paths: Record<string, string[]>;
  };
}

function resolveModulePath(
  tsPath: string,
  tsconfig: TsConfig
): string {
  const matchPath = createMatchPath(
    path.join(baseUrl, tsconfig.compilerOptions.baseUrl),
    tsconfig.compilerOptions.paths
  );

  const matched: string | undefined = matchPath(tsPath, undefined, undefined, ['.ts', '.tsx', '.js', '.jsx']);

  if (!matched) {
    throw new Error(`Unable to resolve module path for: ${tsPath}`);
  }

  return pathToFileURL(path.resolve(matched)).href;
}

async function main() {
  const problemNumber = argv[2];

  if (!problemNumber) {
    console.error('❌ Please provide a problem number.');
    console.info('Usage: pnpm dev <problem-number>');
    process.exit(1);
  }

  try {
    const tsconfig = await loadTsConfig();

    tsConfigPaths.register({
      baseUrl: path.join(baseUrl, tsconfig.compilerOptions.baseUrl || 'src'),
      paths: tsconfig.compilerOptions.paths,
    });

    const problemPath = resolveModulePath(`@/app/${problemNumber}.ts`, tsconfig);
    const testPath = resolveModulePath(`@/test/${problemNumber}.test.ts`, tsconfig);

    console.log(`🔍 Loading problem ${problemNumber}...`);
    await import(problemPath);

    console.log(`🧪 Running test for problem ${problemNumber}...`);
    await import(testPath);

    console.log('✅ All tests finished (see output above).');
  } catch (err) {
    if (err instanceof Error) {
      console.error(`❌ Failed to run problem ${problemNumber}:`, err.message);
    } else {
      console.error(`❌ Failed to run problem ${problemNumber}:`, err);
    }
    process.exit(1);
  }
}

main();
