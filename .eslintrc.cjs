module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/strict-type-checked'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    ignorePatterns: [
        'node_modules',
        '/docs/',
        '/.eslintrc.cjs',
        'webpack.config.js',
        'hooks/',
        "global.d.ts"
    ],
    parserOptions: {
        project: ["./tsconfig.json"],
    }
};
