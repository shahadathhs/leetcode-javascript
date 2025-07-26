import { pathsToModuleNameMapper, type JestConfigWithTsJest } from 'ts-jest';
import { readFileSync } from 'fs';
import path from 'path';

const tsconfig = JSON.parse(
  readFileSync(path.join(__dirname, 'tsconfig.json'), 'utf-8')
);

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],
  },
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
};

export default config;
