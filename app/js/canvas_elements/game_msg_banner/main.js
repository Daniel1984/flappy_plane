(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function GameBanner(msg, options) {
    this.texture = PIXI.Texture.fromFrame(FP.UI_PATH + msg + '.png');
    this.options = options || {};
    PIXI.Sprite.call(this, this.texture);
    this.setupDimention();
  }

  GameBanner.prototype = Object.create(PIXI.Sprite.prototype);
  GameBanner.prototype.constructor = GameBanner;

  GameBanner.prototype.setupDimention = function() {
    if(this.texture.width <  FP.GAME_WIDTH) {
      this.width = this.texture.width;
      this.height = this.texture.height;
    } else {
      var w = FP.GAME_WIDTH;
      this.width = Math.floor(w - w / 3);
    }
    this.position.x = this.options.posX || Math.floor(FP.GAME_WIDTH / 2 - this.width / 2);
    this.position.y = this.options.posY || Math.floor(FP.GAME_HEIGHT / 2 - this.height - 50);
    // -50 just small delta to lift banner higher
  };

  module.exports = GameBanner;

})();
