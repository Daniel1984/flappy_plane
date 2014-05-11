(function() {
  'use strict';
  
  var BB = require('./modules/base_bb'),
      Navbar = require('./views/navbar/main'),
      Leaderboard = require('./views/leaderboard/main'),
      ScoreAddition = require('./views/score_addition/main');

  BB.history.start({ pushState: true });

  module.exports = BB.Router.extend({
    routes: {
      '/'           : 'indexView',
      ''            : 'indexView',
      'leaderboard' : 'leaderBoardView',
      'add_score'   : 'addScoreView'
    },

    initialize: function() {
      document.querySelector('.web-ui').appendChild(new Navbar().render().el);
      this.view = undefined; 
    },

    renderView: function(view) {
      document.body.style.overflow = 'auto';
      document.getElementsByTagName('canvas')[0].classList.add('hide');
      document.querySelector('.web-ui').classList.remove('hide');
      if(this.view !== undefined) this.view.remove();
      this.view = view;
      document.querySelector('.web-ui').appendChild(this.view.render().el);
    },

    indexView: function() {
      document.body.style.overflow = 'hidden';
      this.view.remove();
      document.getElementsByTagName('canvas')[0].classList.remove('hide');
      document.querySelector('.web-ui').classList.add('hide');
    },

    leaderBoardView: function() {
      this.renderView(new Leaderboard());
    },

    addScoreView: function() {
      this.renderView(new ScoreAddition());
    }

  }); 

})();
