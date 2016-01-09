var _ = require('lodash');

module.exports = function(signal, factor) {
  return _.filter(signal, function(item, index) {
    return (index % factor == 0);
  });
};
