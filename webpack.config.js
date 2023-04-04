const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env, argv) => {
  const mode = argv.mode || 'production';
  const config = mode === 'development'
    ? require('./webpack.dev.js')
    : require('./webpack.prod.js');
  return merge(common, config);
};
