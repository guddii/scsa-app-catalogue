const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
require("dotenv").config({ silent: process.env.NODE_ENV === "production" });

const { dist, src } = require("./path");
const { preprocessor } = require("./loader");
const scs = "catalogue";

module.exports = {
    stats: "errors-warnings",
    entry: {
        main: path.resolve(__dirname, src + "/" + scs + ".ts")
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, dist),
        filename: scs + ".[hash].js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 4020,
        open: false
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader"
            },
            {
                test: preprocessor.fileRegexp,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: preprocessor.loaderName,
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            HOST_MAIN: "http://localhost:3000",
            HOST_ACCOUNT: "http://localhost:4010",
            HOST_CATALOGUE: "http://localhost:4020",
            HOST_CHECKOUT: "http://localhost:4030"
        }),
        new MiniCssExtractPlugin({
            filename: scs + ".[hash].css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            meta: { viewport: "width=device-width" },
            template: path.resolve(__dirname, src + "/index.html"),
            filename: "index.html"
        })
    ]
};
