(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Rock(texture, posX, yPlacement) {
    PIXI.Sprite.call(this, texture);  
    this.height = FlappyPlane.GAME_HEIGHT / 2 - 30;
    var posY = yPlacement === 'bottom' ? FlappyPlane.GAME_HEIGHT - this.height : 0;
    this.position.x = posX;
    this.position.y = posY;
 }

  Rock.prototype = Object.create(PIXI.Sprite.prototype);
  Rock.prototype.constructor = Rock;

  Rock.prototype.update = function() {
    if(!FlappyPlane.GAME_OVER) {
      this.position.x -= FlappyPlane.ROCKS_SPEED;
      if(this.position.x < -this.width) {
        this.position.x = FlappyPlane.NUMBER_OF_ROCKS * (FlappyPlane.ROCK_DISTANCE + this.width); 
      }
    }
  };

  module.exports = Rock;

})();
