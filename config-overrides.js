const path = require('path');

module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      loader: 'webpack-modernizr-loader',
      test: /\.modernizrrc\.js$/,
    });

    config.resolve.alias.modernizr$ = path.resolve(
      __dirname,
      'src/.modernizrrc.js'
    );

    return config;
  },
};
