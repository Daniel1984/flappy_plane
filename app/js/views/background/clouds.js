(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Clouds() {
    var texture = PIXI.Texture.fromImage(FlappyPlane.CLOUDS_PATH + "background.png");
    PIXI.TilingSprite.call(this, texture);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
    this.scaleToFitScreen(); 
  }

  Clouds.prototype = Object.create(PIXI.TilingSprite.prototype);
  Clouds.prototype.constructor = Clouds;

  Clouds.prototype.scaleToFitScreen = function() {
    if(FlappyPlane.GAME_HEIGHT > this.texture.height) {
      this.scale.y = FlappyPlane.GAME_HEIGHT / this.texture.height;
    }
  };

  Clouds.prototype.update = function() {
    if(!FlappyPlane.GAME_OVER) {
      this.tilePosition.x -= FlappyPlane.CLOUDS_SPEED;
    }
  };

  module.exports = Clouds;

})();
