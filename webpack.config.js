const path = require('path');
// const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  entry: `${__dirname}/src/index.js`,
  output: {
    
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    // path: __dirname + '/dist',
    // publicPath: '/',
    // filename: 'bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      // },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      
      {
        test: /\.(png|svg|jpg|gif)$/,
         use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  
  // devServer: {
  //   contentBase: './dist'
  // }
};
