(function() {
  'use strict';

  var BB = require('../../modules/base_bb'),
      template = require('../../templates/score_addition/main.hbs'),
      Score = require('../../models/score');

  module.exports = BB.View.extend({
    className: 'score-addition container',
    events: {
      'click .cancel-btn': 'onCancelClick',
      'click .submit-btn': 'onSubmitClick',
      'keyup .name-input': 'onInputKeyUp'
    },

    initialize: function() {
      this.model = new Score();
    },

    render: function() {
      this.el.innerHTML = template();
      this.$('div.score').text(sessionStorage.getItem('current_score'));
      return this;
    },

    onCancelClick: function(e) {
      e.preventDefault();
      FP.router.navigate('leaderboard', { trigger: true });
    },

    onInputKeyUp: function(e) {
      if(e.currentTarget.value !== '') {
        this.$('p.bg-danger').addClass('hide');
      }
    },

    onSubmitClick: function(e) {
      e.preventDefault();
      if(FP.GAME_SCORE === 0) {
        this.$('p.bg-danger').text('you have 0 points, clearly you can do better than that ;)').removeClass('hide');
      } else if(FP.GAME_SCORE !== parseInt(sessionStorage.getItem('current_score'))) {
        this.$('p.bg-danger').text('do not cheat!').removeClass('hide');
      } else if (document.querySelector('.name-input').value === "") {
        this.$('p.bg-danger').text('enter you name/nickname below').removeClass('hide');
      } else {
        e.currentTarget.innerHTML = 'loading...';
        window.shit = e.currentTrget;
        this.model.save({
          name: document.querySelector('.name-input').value,
          score: FP.GAME_SCORE
        },{
          success: function() {
            FP.GAME_SCORE = 0;
            FP.GAME_HIGH_SCORE = 0;
            sessionStorage.clear();
            FP.router.navigate('leaderboard', { trigger: true });
          }
        });
      }
    }

  });
})();
