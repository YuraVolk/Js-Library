module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:react-hooks/recommended'
    ],
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
        project: [
            "./lit/tsconfig.json",
            "./vue/tsconfig.json",
            "./react/tsconfig.json",
            "./shared/tsconfig.json"
        ],
    },
    overrides: [{
        files: ["./lit/interfaces/hooks/**/*"],
        rules: {
            "@typescript-eslint/no-dynamic-delete": "off"
        }
    }]
};
