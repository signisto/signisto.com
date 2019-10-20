module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/test/mocks/styles.js"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/test/**/*.test.(ts|tsx)"],
  setupFiles: ["./jest.setup.js"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  globals: {
    "window": {
      addEventListener: () => {},
      removeEventListener: () => {},
    },
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
}
