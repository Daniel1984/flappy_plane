(function() {
  'use strict';

  var BB = require('../../modules/base_bb'),
      template = require('../../templates/navbar/main.hbs');

  module.exports = BB.View.extend({
    className: 'header row-fluid',
    events: {
      'touchend a.title': 'onTitleClick',
      'click a.title': 'onTitleClick'
    },

    render: function() {
      this.el.innerHTML = template();
      return this;
    },

    onTitleClick: function(e) {
      e.preventDefault();
      FlappyPlane.router.navigate('/', { trigger: true });
    }

  });

})();
