(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      Button = require('../buttons/main');

  function ResetGameControls() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = 300;
    this.height = 100;
    this.position.y = FP.GAME_HEIGHT - this.height;
    this.position.x = FP.GAME_WIDTH / 2 - this.width / 2;
    this.addShareBtn();
    this.restartBtn();
    this.addLeaderBoardBtn();
  }

  ResetGameControls.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  ResetGameControls.prototype.constructor = ResetGameControls;

  ResetGameControls.prototype.addShareBtn = function() {
    var options = {
      width: 140,
      letters: ['S', 'H', 'A', 'R', 'E'],
      letterH: 20,
      letterW: 15,
      lettersXoffset: 30,
      callback: function() {
        alert('not implemented yet');
      }
    };
    var button = new Button(options);
    button.y = 50;
    this.addChild(button);    
  };

  ResetGameControls.prototype.restartBtn = function() {
    var _this = this;
    var options = {
      width: 140, 
      letters: ['R', 'E', 'S', 'T', 'A', 'R', 'T'],
      letterH: 20,
      letterW: 15,
      lettersXoffset: 17,
      callback: function() {
        _this.parent.parent.restartGame();
      }
    };
    var button = new Button(options);
    button.y = 50;
    button.x = this.width - button.width;
    this.addChild(button);
  };

  ResetGameControls.prototype.addLeaderBoardBtn = function() {
    var options = {
      width: 300,
      letters: ['A','D','D','','T','O','','L','E','A','D','E','R','B','O','A','R','D'],
      letterH: 20,
      letterW: 15,
      lettersXoffset: 15,
      callback: function() {
        sessionStorage.setItem('current_score', FP.GAME_SCORE);
        FP.router.navigate('add_score', { trigger: true });
      }
    };
    var button = new Button(options);
    this.addChild(button);
  };

  module.exports = ResetGameControls;

})();
