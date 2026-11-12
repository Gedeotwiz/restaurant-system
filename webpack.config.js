const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    return {
    mode: isProduction ? "production" : "development",

    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: isProduction ? "/restaurant-system/" : "/"
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],

    devServer: {
    port: 8080,
    historyApiFallback: true
}
    };
};
