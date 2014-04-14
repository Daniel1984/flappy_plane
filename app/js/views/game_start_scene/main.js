(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function GameStartScene() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
  }

  GameStartScene.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  GameStartScene.constructor = GameStartScene;

  module.exports = GameStartScene; 

})();
