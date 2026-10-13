import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // e2e/ belongs to Playwright; .agents/ holds installed skill scripts, not app code
  testPathIgnorePatterns: ["<rootDir>/e2e/", "<rootDir>/.agents/"],
};

export default createJestConfig(config);
