(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Clouds() {
    var texture = PIXI.Texture.fromImage(FP.CLOUDS_PATH + "background.png");
    PIXI.TilingSprite.call(this, texture);
    this.width = FP.GAME_WIDTH;
    this.height = FP.GAME_HEIGHT;
    this.scaleToFitScreen(); 
  }

  Clouds.prototype = Object.create(PIXI.TilingSprite.prototype);
  Clouds.prototype.constructor = Clouds;

  Clouds.prototype.scaleToFitScreen = function() {
    if(FP.GAME_HEIGHT > this.texture.height) {
      this.scale.y = FP.GAME_HEIGHT / this.texture.height;
    }
  };

  Clouds.prototype.update = function() {
    if(!FP.GAME_OVER) {
      this.tilePosition.x -= FP.CLOUDS_SPEED;
    }
  };

  module.exports = Clouds;

})();
