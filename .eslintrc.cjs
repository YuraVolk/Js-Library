module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
    ],
    plugins: ['@typescript-eslint'],
    ignorePatterns: [
        'node_modules',
        '/docs/',
        '.eslintrc.cjs',
        'webpack.config.js',
        'hooks/',
        "global.d.ts"
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: [
            "./tsconfig.json",
        ],
    },
    rules: {
        "no-mixed-spaces-and-tabs": "off"
    },
};
