(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function ProgressTitle() {
    PIXI.DisplayObjectContainer.call(this);
    this.scores = ['S', 'C', 'O', 'R', 'E'];
    this.width = 190;
    this.height = 35;
    this.position.y = 2;
    this.position.x = FP.getWidth() / 2 - this.width / 2;
    this.drawUiElements();
  }

  ProgressTitle.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  ProgressTitle.prototype.constructor = ProgressTitle;

  ProgressTitle.prototype.drawUiElements = function() {
    this.drawBackground();
    this.drawScoreTitle();
    this.drawScoreNumber();
  };

  ProgressTitle.prototype.drawBackground = function() {
    var texture = PIXI.Texture.fromFrame(FP.UI_PATH + 'buttonLarge.png');
    var background = new PIXI.Sprite(texture);
    background.width = this.width;
    background.height = this.height;
    background.alpha = 0.8;
    this.addChild(background);
  };

  ProgressTitle.prototype.drawScoreTitle = function() {
    var posX = 10;
    for(var i = 0, len = this.scores.length; i < len; i += 1) {
      var texture = PIXI.Texture.fromFrame(FP.LETTERS_PATH + 'letter' + this.scores[i] + '.png');
      var letter = new PIXI.Sprite(texture); 
      letter.width = 20;
      letter.height = 25;
      letter.position.y = 4;
      letter.position.x = posX;
      posX += letter.width;
      this.addChild(letter);
    }
  };

  ProgressTitle.prototype.drawScoreNumber = function() {
    var scores = String(FP.GAME_SCORE).split('');
    var posX = 120;
    for(var i = 0, len = scores.length; i < len; i += 1) {
      var texture = PIXI.Texture.fromFrame(FP.NUMBERS_PATH + 'number' + scores[i] + '.png');
      var number = new PIXI.Sprite(texture);
      number.width = 20;
      number.height = 25;
      number.position.y = 4;
      number.position.x = posX;
      posX += number.width;
      this.addChild(number);
    }
  };

  ProgressTitle.prototype.update = function() {
    this.children = [];
    this.drawUiElements();
  };

  module.exports = ProgressTitle;
})();
