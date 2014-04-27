(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function TapRightLabel(tapType) {
    this.texture = PIXI.Texture.fromFrame(FlappyPlane.UI_PATH + tapType + '.png'); 
    PIXI.Sprite.call(this, this.texture);
    this.setupDimention();
  }

  TapRightLabel.prototype = Object.create(PIXI.Sprite.prototype);
  TapRightLabel.prototype.constructor = TapRightLabel;

  TapRightLabel.prototype.setupDimention = function() {
    this.position.y = Math.floor(FlappyPlane.GAME_HEIGHT / 2 + this.height);
    this.position.x = Math.floor(FlappyPlane.GAME_WIDTH / 2 - (this.width + 30));
  };

  module.exports = TapRightLabel;
})();
