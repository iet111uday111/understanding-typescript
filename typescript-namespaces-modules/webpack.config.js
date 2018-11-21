module.exports = {
    entry: "./third-party.ts",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader"}
        ]
    }
};