module.exports = {
  testEnvironment: 'jsdom',
  testPatIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true,
  collecctCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
