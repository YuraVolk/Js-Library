const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const glob = require("glob");

const litHtmlPlugins = glob.sync("./src/docs/lit/**/*.html").map((file) => {
	const entryName = file
		.replace(/\\/g, "/")
		.replace(/^\.?\/?src\/docs\/lit\//, "")
		.replace(/index\.html$/, "");

	return new HtmlWebpackPlugin({
		template: file,
		filename: `lit/${entryName}/index.html`,
		chunks: [`lit/${entryName}`],
		inject: false
	});
});

const litAppEntry = glob.sync("./src/docs/lit/**/app.ts").reduce((entry, file) => {
	const entryName = file
		.replace(/\\/g, "/")
		.replace(/src\/docs\/lit\//, "")
		.replace(/\/app\.ts$/, "");
	return { ...entry, [`lit/${entryName}/index`]: "./" + file };
}, {});

module.exports = {
	mode: "development",
	entry: litAppEntry,
	devServer: {
		static: path.join(__dirname, "dist"),
		port: 3002
	},
	output: {
		path: path.resolve(__dirname, "../docs"),
		chunkFilename: "[id]-lit.js"
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "lit",
			remotes: {
				shared: "shared@[sharedInterfacesUrl]/remoteEntry.js"
			}
		}),
		new ExternalTemplateRemotesPlugin(),
		...litHtmlPlugins,
		new MiniCssExtractPlugin({
			filename: devMode ? "[name].css" : "[name].[hash].css",
			chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
		})
	],
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx", ".css"],
		alias: {
			src: path.resolve(__dirname, "../src")
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp|mp4)$/i,
				type: "asset/resource",
				generator: {
					filename: "img/[name][ext]"
				}
			}
		]
	}
};
