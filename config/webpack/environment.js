const { environment } = require('@rails/webpacker')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
environment.plugins.append(
  'VueLoaderPlugin',
  new VueLoaderPlugin()
);
environment.loaders.append('vue', {
  test: /\.vue$/,
  loader: 'vue-loader'
});
module.exports = environment
