const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const glob = require('glob');

const syncedInterfaceFiles = glob.sync("./**/*.ts").map(p => p.replace(/\\/g, "/"));
const exposedInterfaceEntries = syncedInterfaceFiles.reduce((p, n) => ({
    ...p,
    ["./" + n.replace(/\.ts$/, "")]: "./" + n }
), {});
const interfaceEntries = glob.sync("./**/*.ts").reduce((entry, file) => {
    const entryName = file
        .replace(/\\/g, "/")
        .replace(/\.ts$/, "");
    return { ...entry, [`${entryName}/index`]: "./" + file };
}, {});

module.exports = {
    entry: interfaceEntries,
    mode: "development",
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 3001
    },
    output: {
        path: path.resolve(__dirname, '../docs/shared'),
        publicPath: 'auto'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'shared',
            filename: 'remoteEntry.js',
            exposes: exposedInterfaceEntries
        }),
    ]
};
