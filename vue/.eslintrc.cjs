module.exports = {
	extends: ["plugin:vue/vue3-recommended"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		project: ["./tsconfig.json"],
		extraFileExtensions: [".vue"]
	},
	overrides: [
		{
			files: ["*.vue"],
			rules: {
				"no-undef": "off"
			}
		}
	]
};
