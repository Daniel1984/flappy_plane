(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Ground() {
    var texture = PIXI.Texture.fromFrame(FlappyPlane.LANDSCAPE_PATH + "groundGrass.png");
    PIXI.TilingSprite.call(this, texture, FlappyPlane.GAME_WIDTH, texture.height);
    this.position.y = Math.ceil(FlappyPlane.GAME_HEIGHT - texture.height);
  }

  Ground.prototype = Object.create(PIXI.TilingSprite.prototype);
  Ground.prototype.constructor = Ground;

  Ground.prototype.update = function() {
    if(!FlappyPlane.GAME_OVER) {
      this.tilePosition.x -= FlappyPlane.GROUND_SPEED;
    }
  };

  module.exports = Ground;

})();
