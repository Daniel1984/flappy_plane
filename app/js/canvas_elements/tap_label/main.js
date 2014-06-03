(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function TapRightLabel(tapType, options) {
    this.options = options || {};
    this.texture = PIXI.Texture.fromFrame(FP.UI_PATH + tapType + '.png'); 
    PIXI.Sprite.call(this, this.texture);
    this.setupDimention();
  }

  TapRightLabel.prototype = Object.create(PIXI.Sprite.prototype);
  TapRightLabel.prototype.constructor = TapRightLabel;

  TapRightLabel.prototype.setupDimention = function() {
    this.position.y = this.options.posY || Math.floor(FP.getHeight() / 2 + this.height);
    this.position.x = Math.floor(FP.getWidth() / 2 - (this.width + 30));
  };

  module.exports = TapRightLabel;
})();
