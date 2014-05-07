(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function CurrentAndBestScore() {
    PIXI.DisplayObjectContainer.call(this); 
    this.setupPosition();
    this.renderCurrentScore();
    this.renderBestScore(); 
  }

  CurrentAndBestScore.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  CurrentAndBestScore.prototype.constructor = CurrentAndBestScore;

  CurrentAndBestScore.prototype.setupPosition = function() {
    this.width = 160;
    this.height = 55;
    this.position.y = Math.round(FlappyPlane.GAME_HEIGHT / 2 - this.height / 2); 
    this.position.x = FlappyPlane.GAME_WIDTH / 2 - this.width / 2;
  };

  CurrentAndBestScore.prototype.renderCurrentScore = function() {
    var letters = ['S', 'C', 'O', 'R', 'E'];
    var scores = String(FlappyPlane.GAME_SCORE).split('');
    this.renderText(letters, scores);
  };

  CurrentAndBestScore.prototype.renderBestScore = function() {
    if(FlappyPlane.GAME_SCORE > FlappyPlane.GAME_HIGH_SCORE) FlappyPlane.GAME_HIGH_SCORE = FlappyPlane.GAME_SCORE;
    var letters = ['B', 'E', 'S', 'T'];
    var scores = String(FlappyPlane.GAME_HIGH_SCORE).split('');
    this.renderText(letters, scores, { posY: 30 });
  };

  CurrentAndBestScore.prototype.renderText = function(letters, scores, options) {
    options = options || {};
    var posX = 0;
    for(var i = 0, len = letters.length; i < len; i += 1) {
      var lTexture = PIXI.Texture.fromFrame(FlappyPlane.LETTERS_PATH + 'letter' + letters[i] + '.png');
      var letter = new PIXI.Sprite(lTexture);
      letter.width = 20;
      letter.height = 25;
      letter.position.x = posX;
      letter.position.y = options.posY || 0;
      posX += letter.width;
      this.addChild(letter);
    }

    for(var j = 0, nlen = scores.length; j < nlen; j += 1) {
      var nTexture = PIXI.Texture.fromFrame(FlappyPlane.NUMBERS_PATH + 'number' + scores[j] + '.png');
      var number = new PIXI.Sprite(nTexture);
      number.width = 20;
      number.height = 25;
      posX += 20;
      number.position.x = posX;
      number.position.y = options.posY || 0;
      this.addChild(number);
    }
  };

  module.exports = CurrentAndBestScore;
  
})();
