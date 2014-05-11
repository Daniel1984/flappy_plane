(function() {
  'use strict';

  var BB = require('../../modules/base_bb'),
      template = require('../../templates/leaderboard/score_item.hbs');

  module.exports = BB.View.extend({
    tagName: 'tr',

    render: function() {
      this.el.innerHTML = template(this.model.toJSON());
      return this;
    }

  });
})();
