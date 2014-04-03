(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Clouds(texture, width, height) {
    PIXI.TilingSprite.call(this, texture, width, height);
    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;
  }
  
  Clouds.constructor = Clouds;
  Clouds.prototype = Object.create(PIXI.TilingSprite.prototype);

  module.exports = Clouds;

})();
