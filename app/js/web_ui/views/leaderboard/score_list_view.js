(function() {
  'use strikt';

  var BB = require('../../modules/base_bb'),
      template = require('../../templates/leaderboard/score_list.hbs'),
      LeaderCollection = require('../../collections/scores'),
      ItemView = require('./score_item_view');

  module.exports = BB.View.extend({
    events: {
      'click .back-to-game-btn'   : 'onBackToGameClick',
      'touchend .back-to-game-btn': 'onBackToGameClick'
    },

    initialize: function() {
      this.collection = new LeaderCollection();
      this.listenTo(this.collection, 'reset', this.onCollectionReset);
    },

    render: function() {
      this.el.innerHTML = template();
      this.collection.fetch({ reset: true });
      return this;
    },

    onCollectionReset: function() {
      if(this.collection.isEmpty()) return this.$('td.loading').text('no scores added yet');
      this.$('tbody').empty();
      this.collection.forEach(this.addCollectionItem.bind(this));
    },

    addCollectionItem: function(model) {
      this.$('tbody').append(new ItemView({ model: model }).render().el);
    },

    onBackToGameClick: function(e) {
      e.preventDefault();
      FP.router.navigate('/', { trigger: true });
    }
  });

})();
