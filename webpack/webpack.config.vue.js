const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const { VueLoaderPlugin } = require("vue-loader");

const vueHtmlPlugins = glob.sync("./src/docs/vue/**/*.html").map((file) => {
	const entryName = file.replace(/^\.\/src\/docs\/vue\//, "").replace(/index\.html$/, "");
	return new HtmlWebpackPlugin({
		template: file,
		filename: `vue/${entryName}/index.html`,
		chunks: [`vue/${entryName}`],
		inject: false
	});
});

const vueAppEntry = glob.sync("./src/docs/vue/**/app.ts").reduce((entry, file) => {
	const entryName = file.replace(/^\.\/src\/docs\/vue\//, "").replace(/\/app\.ts$/, "");
	return { ...entry, [`vue/${entryName}/index`]: file };
}, {});

module.exports = {
	mode: "development",
	entry: vueAppEntry,
	output: {
		path: path.resolve(__dirname, "../docs"),
		filename: "[name].js"
	},
	plugins: [
		new VueLoaderPlugin(), 
		...vueHtmlPlugins
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"]
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "babel-preset-typescript-vue3", "@babel/preset-typescript"]
				}
			}
		]
	},
	resolve: {
		extensions: [".js", ".vue", ".ts"],
		alias: {
			vue: "vue/dist/vue.esm-bundler.js",
			src: path.resolve(__dirname, "../src")
		}
	}
};
