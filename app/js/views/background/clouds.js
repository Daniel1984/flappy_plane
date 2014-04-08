(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Clouds(texture) {
    PIXI.TilingSprite.call(this, texture);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
  }

  Clouds.prototype = Object.create(PIXI.TilingSprite.prototype);
  Clouds.constructor = Clouds;

  Clouds.prototype.update = function() {
    this.tilePosition.x -= FlappyPlane.CLOUDS_SPEED;
  };

  module.exports = Clouds;

})();
