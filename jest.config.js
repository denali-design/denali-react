// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkgName = require('./package.json').name;

module.exports = {
    testMatch: ['**/src/**/__tests__/**/*.spec.jsx'],
    verbose: true,
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js', './setup4JestTests.js'],
    testEnvironment: 'enzyme',
    cacheDirectory: './node_modules/.cache/jest',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/__tests__/**', '!**/__stories__/**'],
    coverageDirectory: 'artifacts/coverage',
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                pageTitle: `${pkgName} - unit test`,
                publicPath: './artifacts/unit-test',
                filename: 'index.html',
                expand: true,
                // TODO: add `customInfos` for build url
            },
        ],
    ],
    testPathIgnorePatterns: ['/node_modules/'],
    testURL: 'http://localhost/',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/jest.file-transformer.js',
    },
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
};
