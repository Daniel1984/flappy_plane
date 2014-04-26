(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Rock(texture, posX, yPlacement) {
    PIXI.Sprite.call(this, texture);  
    this.height = FlappyPlane.GAME_HEIGHT / 2 - FlappyPlane.VERTICAL_GAP_BETWEEN_ROCKS;
    var posY = yPlacement === 'bottom' ? FlappyPlane.GAME_HEIGHT - this.height : 0;
    this.position.x = posX;
    this.position.y = posY;
 }

  Rock.prototype = Object.create(PIXI.Sprite.prototype);
  Rock.prototype.constructor = Rock;

  Rock.prototype.update = function() {
    if(this.position.x < -this.width) {
      this.recalibratePosition();
    }
    this.position.x -= FlappyPlane.ROCKS_SPEED;
  };

  Rock.prototype.recalibratePosition = function() {
    this.position.x = FlappyPlane.NUMBER_OF_ROCKS * (FlappyPlane.ROCK_DISTANCE + this.getDeltaX());
  };

  Rock.prototype.getDeltaX = function() {
    return Math.floor(Math.random() * 108 + 108);
  };

  module.exports = Rock;

})();
