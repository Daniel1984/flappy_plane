(function() {
  'use strict';

  var BB = require('../modules/base_bb');

  module.exports = BB.Model.extend({
    idAttribute: '_id',
    urlRoot: '/scores'
  });
})();
