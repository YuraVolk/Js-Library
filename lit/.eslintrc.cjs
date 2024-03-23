module.exports = {
    overrides: [{
        files: ["./interfaces/hooks/**/*"],
        rules: {
            "@typescript-eslint/no-dynamic-delete": "off"
        }
    }]
};
