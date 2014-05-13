(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Ground() {
    // var texture = PIXI.Texture.fromFrame(FP.LANDSCAPE_PATH + "groundGrass.png");
    var texture = PIXI.Texture.fromImage("/img/groundGrass.png");
    PIXI.TilingSprite.call(this, texture, FP.GAME_WIDTH, texture.height);
    this.position.y = Math.ceil(FP.GAME_HEIGHT - texture.height);
  }

  Ground.prototype = Object.create(PIXI.TilingSprite.prototype);
  Ground.prototype.constructor = Ground;

  Ground.prototype.update = function() {
    if(!FP.GAME_OVER) {
      this.tilePosition.x -= FP.GROUND_SPEED;
    }
  };

  module.exports = Ground;

})();
