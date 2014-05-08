(function() {
  'use strict';
  
  var BB = require('./modules/base_bb'),
      Navbar = require('./views/navbar/main');

  BB.history.start({ pushState: true });

  module.exports = BB.Router.extend({
    routes: {
      '/'           : 'indexView',
      ''            : 'indexView',
      'leaderboard' : 'leaderBoardView',
    },

    initialize: function() {
      document.querySelector('.web-ui').appendChild(new Navbar().render().el);
    },

    indexView: function() {
      document.getElementsByTagName('canvas')[0].classList.remove('hide');
      document.querySelector('.web-ui').classList.add('hide');
    },

    leaderBoardView: function() {
      document.getElementsByTagName('canvas')[0].classList.add('hide');
      document.querySelector('.web-ui').classList.remove('hide');
    }

  }); 

})();
