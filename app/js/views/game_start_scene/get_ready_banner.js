(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function GetReadyBanner() {
    this.texture = PIXI.Texture.fromFrame(FlappyPlane.TEXTURE_PATH + "textGetReady.png");
    PIXI.Sprite.call(this, this.texture);
    this.setupDimention();
  }

  GetReadyBanner.prototype = Object.create(PIXI.Sprite.prototype);
  GetReadyBanner.prototype.constructor = GetReadyBanner;

  GetReadyBanner.prototype.setupDimention = function() {
    if(this.texture.width <  FlappyPlane.GAME_WIDTH) {
      this.width = this.texture.width;
      this.height = this.texture.height;
    } else {
      var w = FlappyPlane.GAME_WIDTH;
      this.width = w - w / 2;
    }
    this.position.x = FlappyPlane.GAME_WIDTH / 2 - this.width / 2;
    this.position.y = FlappyPlane.GAME_HEIGHT / 2 - this.height - 50;
    // -50 just small delta to lift banner higher
  };

  module.exports = GetReadyBanner;

})();
