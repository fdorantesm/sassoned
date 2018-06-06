var path = require('path');

var entryPoint = require.resolve('gosp.css');
var dirname = path.dirname(entryPoint);

function includePaths() {
  return dirname;
}

module.exports = {

  includePaths: includePaths(),

  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }

};
