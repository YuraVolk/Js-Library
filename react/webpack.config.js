const path = require("path");
const glob = require("glob");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const reactHtmlPlugins = glob.sync("./src/docs/react/**/*.html").map((file) => {
	const entryName = file.replace(/^\.\/src\/docs\/react\//, "").replace(/index\.html$/, "");
	return new HtmlWebpackPlugin({
		template: file,
		filename: `react/${entryName}/index.html`,
		chunks: [`react/${entryName}`],
		inject: false
	});
});

const reactAppEntry = glob.sync("./src/docs/react/**/App.tsx").reduce((entry, file) => {
	const entryName = file.replace(/^\.\/src\/docs\/react\//, "").replace(/\/App\.tsx$/, "");
	return { ...entry, [`react/${entryName}/index`]: file };
}, {});

module.exports = {
	mode: "development",
	output: {
		path: path.resolve(__dirname, "../docs"),
		filename: "[name].js",
		chunkFilename: "[id]-react.js"
	},
	devServer: {
		static: path.join(__dirname, "dist"),
		port: 3004
	},
	entry: {
		interfacesEntry: "./src/components/reactEntry.ts",
		...reactAppEntry
	},
    plugins: [
		new ModuleFederationPlugin({
			name: "react",
			remotes: {
				shared: "shared@[sharedInterfacesUrl]/remoteEntry.js"
			}
		}),
		new ExternalTemplateRemotesPlugin(),
		...reactHtmlPlugins
	],
    module: {
        rules: [
            {
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "@babel/react", "@babel/preset-typescript"]
				}
			},
			{
				test: /\.module\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /\.module\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
			  test: /\.(png|svg|jpg|jpeg|gif|webp|mp4)$/i,
			  type: 'asset/resource',
			  generator: {
				filename: 'img/[name][ext]'
			  }
			}
        ]
    },
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
		alias: {
			src: path.resolve(__dirname, '../src')
		}
	}
};
