(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Rock(texture, posX, posY) {
    PIXI.Sprite.call(this, texture);
    this.position.x = posX;
    this.position.y = posY;
  }

  Rock.prototype = Object.create(PIXI.Sprite.prototype);
  Rock.constructor = Rock;

  Rock.prototype.update = function() {
    this.position.x -= FlappyPlane.ROCKS_SPEED;
    if(this.position.x < -this.width) { 
      this.position.x = FlappyPlane.NUMBER_OF_ROCKS * (FlappyPlane.ROCK_DISTANCE + this.width); 
    }
  };

  module.exports = Rock;

})();
