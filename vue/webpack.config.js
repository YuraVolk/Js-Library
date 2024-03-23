const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");
const { VueLoaderPlugin } = require("vue-loader");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

const vueHtmlPlugins = glob.sync("./src/docs/vue/**/*.html").map((file) => {
	const entryName = file
		.replace(/\\/g, "/")
		.replace(/src\/docs\/vue\//, "")
		.replace(/index\.html$/, "");
	return new HtmlWebpackPlugin({
		template: file,
		filename: `vue/${entryName}/index.html`,
		chunks: [`vue/${entryName}`],
		inject: false
	});
});

const vueAppEntry = glob.sync("./src/docs/vue/**/app.ts").reduce((entry, file) => {
	const entryName = file
		.replace(/\\/g, "/")
		.replace(/src\/docs\/vue\//, "")
		.replace(/\/app\.ts$/, "");
	return { ...entry, [`vue/${entryName}/index`]: "./" + file };
}, {});

module.exports = {
	mode: "development",
	entry: {
		interfacesEntry: "./src/components/vueEntry.ts",
		...vueAppEntry
	},
	devServer: {
		static: path.join(__dirname, "dist"),
		port: 3003
	},
	output: {
		path: path.resolve(__dirname, "../docs"),
		filename: "[name].js",
		chunkFilename: "[id]-vue.js"
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "vue",
			remotes: {
				shared: "shared@[sharedInterfacesUrl]/remoteEntry.js"
			}
		}),
		new ExternalTemplateRemotesPlugin(),
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
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp|mp4)$/i,
				type: "asset/resource",
				generator: {
					filename: "img/[name][ext]"
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
