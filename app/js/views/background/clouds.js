(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Clouds(texture, stageWidth, stageHeight) {
    PIXI.TilingSprite.call(this, texture, stageWidth, stageHeight);
  }

  Clouds.prototype = Object.create(PIXI.TilingSprite.prototype);
  Clouds.constructor = Clouds;

  Clouds.prototype.update = function() {
    this.tilePosition.x -= FlappyPlane.CLOUDS_SPEED;
  };

  module.exports = Clouds;

})();
