const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const glob = require('glob');

const syncedInterfaceFiles = glob.sync("./**/*.ts")
    .map(p => p.replace(/\\/g, "/"))
    .filter(p => !p.includes("node_modules"));
const exposedInterfaceEntries = syncedInterfaceFiles.reduce((p, n) => ({
    ...p,
    [n.replace(/\.ts$/, "")]: "./" + n }
), {});
const interfaceEntries = syncedInterfaceFiles.reduce((entry, file) => {
    const entryName = file.replace(/\.ts$/, "");
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
