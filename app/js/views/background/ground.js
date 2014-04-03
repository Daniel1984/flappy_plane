(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Ground(texture, width, height) {
    PIXI.TilingSprite.call(this, texture, width, texture.baseTexture.height);
    this.position.x = 0;
    this.tilePosition.x = 0;
    this.position.y = height - texture.baseTexture.height + 20;
  }

  Ground.constructor = Ground;
  Ground.prototype = Object.create(PIXI.TilingSprite.prototype);

  module.exports = Ground;

})();
