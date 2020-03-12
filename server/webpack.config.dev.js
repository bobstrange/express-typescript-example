const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const path = require('path');

module.exports = function(options) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', './src/main.ts'],
    output: {
      filename: 'main.js',
      path: path.join(__dirname, 'dist')
    },
    watch: true,
    target: 'node',
    externals: [
      nodeExternals({
        whitelist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/])
    ],
    mode: 'development'
  };
};
