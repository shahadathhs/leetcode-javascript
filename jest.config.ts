import type { JestConfigWithTsJest } from 'ts-jest'
import { pathsToModuleNameMapper } from 'ts-jest'
import { readFileSync } from 'fs'
import path from 'path'

const tsconfig = JSON.parse(readFileSync(path.join(__dirname, 'tsconfig.json'), 'utf-8'))

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
}

export default config
