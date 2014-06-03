(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Clouds() {
    var texture = PIXI.Texture.fromImage(FP.CLOUDS_PATH + "background.png");
    PIXI.TilingSprite.call(this, texture);
    this.width = FP.getWidth();
    this.height = FP.getHeight();
    this.scaleToFitScreen(); 
  }

  Clouds.prototype = Object.create(PIXI.TilingSprite.prototype);
  Clouds.prototype.constructor = Clouds;

  Clouds.prototype.scaleToFitScreen = function() {
    if(FP.getHeight() > this.texture.height) {
      this.scale.y = FP.getHeight() / this.texture.height;
    }
  };

  Clouds.prototype.update = function() {
    if(!FP.GAME_OVER) {
      this.tilePosition.x -= FP.CLOUDS_SPEED;
    }
  };

  module.exports = Clouds;

})();
