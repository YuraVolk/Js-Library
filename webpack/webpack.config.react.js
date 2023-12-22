const path = require("path");
const glob = require("glob");
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
	output: {
		path: path.resolve(__dirname, "../docs"),
		filename: "[name].js"
	},
	entry: reactAppEntry,
    plugins: reactHtmlPlugins,
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
			  test: /\.(png|svg|jpg|jpeg|gif|webp|mp4)$/i,
			  type: 'asset/resource',
			  generator: {
				filename: 'img/[name][ext]'
			  }
			}
        ]
    }
};
