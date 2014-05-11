(function() {
  'use strict';

  var BB = require('../modules/base_bb'),
      Model = require('../models/score');

  module.exports = BB.Collection.extend({
    url: '/scores',
    model: Model
  });
})();
