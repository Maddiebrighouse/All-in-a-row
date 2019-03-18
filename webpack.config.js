// eslint-disable-next-line no-undef
const path = require('path')

// eslint-disable-next-line no-undef
module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    // loaders: [{
    //     test: /\.css$/,
    //     loader: 'style-loader!css-loader'
    //   },
    //   {
    //     test: /\.scss$/,
    //     loader: 'style-loader!sass-loader'
    //   }
    // ],
    rules: [{
        test: /\.css$/,
        use: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        use: 'style-loader!sass-loader'
      },
      {
        test: /\.sass$/,
        use: 'style-loader!sass-loader'
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}