(function() {
  'use strict';

  var BB = require('../../modules/base_bb'),
      template = require('../../templates/leaderboard/main.hbs'),
      ScoreListView = require('./score_list_view');

  module.exports = BB.View.extend({
    className: 'leaderboard container',

    render: function() {
      this.el.innerHTML = template();
      this.renderLeaderList();
      return this;
    },

    renderLeaderList: function() {
      this.el.appendChild(new ScoreListView().render().el);
    }

  });
})();
