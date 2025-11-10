export default {
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.[tj]sx?$": "babel-jest"
    },
    moduleFileExtensions: ["js", "jsx"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};
