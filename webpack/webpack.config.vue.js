const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const { VueLoaderPlugin } = require('vue-loader');

const vueHtmlPlugins = glob.sync('./src/docs/vue/**/*.html').map((file) => {
    return new HtmlWebpackPlugin({
        template: file,
        filename: file.replace(/^\.\/src\/docs\/vue\//, 'vue/'),
    });
});

const vueAppEntry = glob.sync('./src/docs/vue/**/app.ts').reduce((entry, file) => {
    const entryName = file.replace(/^\.\/src\/docs\/vue\//, '').replace(/\/app\.ts$/, '');
    return { ...entry, [`vue/${entryName}/index`]: file };
}, {});

module.exports = {
    mode: 'development',
    entry: vueAppEntry,
    output: {
        path: path.resolve(__dirname, '../docs'),
        filename: '[name].js'
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
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.vue', '.ts'],
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            src: path.resolve(__dirname, '../src')
        },
    }
};
