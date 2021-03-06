module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    watchPathIgnorePatterns: ['node_modules', '__output'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig-test.json',
        },
    },
}
