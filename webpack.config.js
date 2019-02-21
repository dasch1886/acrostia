const autoprefixer = require('autoprefixer');

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
                        loader: 'style-loader',
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
    }
}