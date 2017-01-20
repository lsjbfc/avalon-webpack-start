const files    = require('../base/files'),
      path     = require('path');
module.exports = {
  alias     : {
    'lib': path.resolve(files.staticPath, "index.js")
  },
  modules   : ['node_modules'],
  extensions: ['.js', '.jsx', '.json']
};