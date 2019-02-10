const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        "index": [__dirname + '/src/app.js', __dirname + '/src/scss/style.scss']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    optimization: {
        minimize: true,
    },
    devServer: {
        contentBase: __dirname + '/dist',
        port: 9000
    },
    module: {
        rules: [{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/images',
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer()
                            ]
                        },
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        }),
    ]
}