module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "collectCoverage": true,
  "collectCoverageFrom": ["./src/**"],
  "modulePathIgnorePatterns": ["./src/main.js"],
  "coverageThreshold": {
    "global": {
      "branch": 60
    }
  }
}
