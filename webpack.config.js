const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    home: [
      __dirname + '/src/app/home.js',
      __dirname + '/src/scss/home/style.scss'
    ],
    services: [
      __dirname + '/src/app/services.js',
      __dirname + '/src/scss/services/style.scss'
    ],
    about: [
      __dirname + '/src/app/about.js',
      __dirname + '/src/scss/about/style.scss'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]/bundle.js',
  },
  optimization: {
    minimize: true
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
        }]
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
      }
    ]
  }
};