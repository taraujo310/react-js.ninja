'use script'

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const { webpack } = require('webpack');

new WebpackDevServer(Webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3000, (err) => {
  if (err) console.log(err);

  console.log('Listening on http://localhost:3000');
})