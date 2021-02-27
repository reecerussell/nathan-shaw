const path = require('path');

module.exports = {
  poweredByHeader: false,
  distDir: 'dist',
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss/styles.scss')],
  },
};
