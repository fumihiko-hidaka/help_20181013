const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: {
      app: [
        '@babel/polyfill',
        './src/app.js',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/.*/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0'],
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${__dirname}/src/index.html`,
        hash: true,
      }),
    ],
  },
];
