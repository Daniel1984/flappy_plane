(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Rock(texture, posX, yPlacement) {
    PIXI.Sprite.call(this, texture);  
    this.height = Math.round(FlappyPlane.GAME_HEIGHT / 2 - FlappyPlane.VERTICAL_GAP_BETWEEN_ROCKS);
    var posY = yPlacement === 'bottom' ? FlappyPlane.GAME_HEIGHT - this.height : 0;
    this.position.x = Math.floor(posX);
    this.position.y = Math.floor(posY);
    this.scoreRecorded = false;
 }

  Rock.prototype = Object.create(PIXI.Sprite.prototype);
  Rock.prototype.constructor = Rock;

  Rock.prototype.update = function() {
    if(this.position.x < -this.width) {
      this.recalibratePosition();
      this.increaseDifficulty();
      this.scoreRecorded = false;
    }
    if(this.position.x + this.width / 2 < FlappyPlane.GAME_WIDTH / 2) {
      this.recordScore();
    }
    this.position.x -= FlappyPlane.ROCKS_SPEED;
  };
  
  Rock.prototype.recordScore = function() {
    if(!this.scoreRecorded) {
      this.scoreRecorded = true;
      FlappyPlane.GAME_SCORE += 1;
    }
  };

  Rock.prototype.recalibratePosition = function() {
    this.position.x = FlappyPlane.NUMBER_OF_ROCKS * (FlappyPlane.ROCK_DISTANCE + this.getDeltaX());
  };

  Rock.prototype.getDeltaX = function() {
    return Math.floor(Math.random() * 108 + 108);
  };

  Rock.prototype.increaseDifficulty = function() {
    FlappyPlane.CLOUDS_SPEED += FlappyPlane.GAME_SPEED_INCREASE;
    FlappyPlane.GROUND_SPEED += FlappyPlane.GAME_SPEED_INCREASE;
    FlappyPlane.ROCKS_SPEED += FlappyPlane.GAME_SPEED_INCREASE;
  };

  module.exports = Rock;

})();
