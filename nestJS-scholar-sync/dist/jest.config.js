"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['./src'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '(\\.|./)spec\\.ts$',
    moduleFileExtensions: ['ts', 'json', 'node', 'js'],
    moduleDirectories: ['node_modules', '<rootDir>'],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverageFrom: ['src/**/*.service.ts'],
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map