const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    home: [
      __dirname + '/src/app/home.js',
    ],
    services: [
      __dirname + '/src/app/services.js',
    ],
    about: [
      __dirname + '/src/app/about.js',
    ],
    work: [
      __dirname + '/src/app/work.js',
    ],
    contacts: [
      __dirname + '/src/app/contact.js',
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]/bundle.js',
    publicPath: '/acrostia/dist',
  },
  optimization: {
    minimize: true,
  },
  devServer: {
    contentBase: __dirname + '/dist',
    port: 9000,
  },
  module: {
    rules: [{
        test: /\.(png|jpg|gif)$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/images'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                optimizationLevel: 7
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};