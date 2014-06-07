(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Ground() {
    var availableGround = ['Grass', 'Dirt', 'Rock', 'Snow'];
    var randomGround = availableGround[Math.floor(Math.random() * 4)];
    var texture = PIXI.Texture.fromImage('/img/ground' + randomGround + '.png');
    PIXI.TilingSprite.call(this, texture, FP.getWidth(), texture.height);
    var deltaYmobile = FP.isMobile() ? 20 : 0;
    this.position.y = Math.ceil(FP.getHeight() - texture.height + deltaYmobile);
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
