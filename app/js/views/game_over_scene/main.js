(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      Backdrop = require('../backdrop/main'),
      MessageBanner = require('../game_msg_banner/main'),
      Scores = require('./current_and_best_scores'),
      GameControls = require('./reset_game_controls');

  function GameOverScene() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
    this.addElements();
  }

  GameOverScene.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  GameOverScene.prototype.constructor = GameOverScene;

  GameOverScene.prototype.addElements = function() {
    this.addBackdrop();
    this.addGameOverBanner();
    this.addScores();
    this.addGameControls();
  };

  GameOverScene.prototype.addBackdrop = function() {
    this.addChild(new Backdrop(0x000000, 0.8));
  };

  GameOverScene.prototype.addGameOverBanner = function() {
    this.addChild(new MessageBanner('textGameOver', { posY: 20 }));
  };

  GameOverScene.prototype.addScores = function() {
    this.addChild(new Scores());
  };

  GameOverScene.prototype.addGameControls = function() {
    this.addChild(new GameControls());
  };

  GameOverScene.prototype.update = function() {};

  module.exports = GameOverScene;

})();
