'use strict';

exports = module.exports = {
  camelize: function (str){
    return str.trim().replace(/(?:^|[-_\s]+)(.)?/g, function(match, c){ return c.toUpperCase(); });
  }
}