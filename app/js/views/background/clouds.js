(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Clouds(texture, width, height) {
    PIXI.TilingSprite.call(this, texture);
    this.width = width;
    this.height = height;
  }

  Clouds.prototype = Object.create(PIXI.TilingSprite.prototype);
  Clouds.constructor = Clouds;

  Clouds.prototype.update = function() {
    this.tilePosition.x -= FlappyPlane.CLOUD_SPEED;
  };

  module.exports = Clouds;

})();
