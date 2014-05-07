(function() {
  'use strict';
  
  var BB = require('./modules/base_bb');
  BB.history.start({ pushState: true });

  module.exports = BB.Router.extend({
    routes: {
      '/'           : 'indexView',
      ''            : 'indexView',
      'leaderboard' : 'leaderBoardView',
    },

    initialize: function() {
      console.log('initialized');
    },

    indexView: function() {
      document.getElementsByTagName('canvas')[0].classList.remove('hidden');
    },

    leaderBoardView: function() {
      document.getElementsByTagName('canvas')[0].classList.add('hidden');
    }

  }); 

})();
