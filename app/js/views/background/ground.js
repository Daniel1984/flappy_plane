(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Ground(texture) {
    PIXI.TilingSprite.call(this, texture, FlappyPlane.GAME_WIDTH, texture.baseTexture.height);
    this.position.y = FlappyPlane.GAME_HEIGHT - texture.baseTexture.height;
  }

  Ground.prototype = Object.create(PIXI.TilingSprite.prototype);
  Ground.constructor = Ground;

  Ground.prototype.update = function() {
    if(!FlappyPlane.GAME_OVER) {
      this.tilePosition.x -= FlappyPlane.GROUND_SPEED;
    }
  };

  module.exports = Ground;

})();
