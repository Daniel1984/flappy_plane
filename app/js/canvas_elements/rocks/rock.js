(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Rock(texture, posX, yPlacement, height_delta) {
    PIXI.Sprite.call(this, texture); 
    this.gameWidth = FP.getWidth();
    this.setupPositioning(posX, yPlacement, height_delta);
    this.speedIncrease = FP.isMobile() ? FP.GAME_MOBILE_SPEED_INCREASE : FP.GAME_SPEED_INCREASE;
 }

  Rock.prototype = Object.create(PIXI.Sprite.prototype);
  Rock.prototype.constructor = Rock;

  Rock.prototype.setupPositioning = function(posX, yPlacement, height_delta) {
    this.height = Math.round(FP.getHeight() / 2 - height_delta);
    var posY = yPlacement === 'bottom' ? FP.getHeight() - this.height : 0;
    this.position.x = Math.floor(posX);
    this.position.y = Math.floor(posY);
    this.scoreRecorded = false;
  };

  Rock.prototype.update = function() {
    if(this.position.x < -this.width) {
      this.recalibratePosition();
      this.increaseDifficulty();
      this.scoreRecorded = false;
    }
    if(this.position.x + this.width / 2 < this.gameWidth / 2) {
      this.recordScore();
    }
    this.position.x -= FP.ROCKS_SPEED;
  };
  
  Rock.prototype.recordScore = function() {
    if(!this.scoreRecorded) {
      this.scoreRecorded = this.texture.width;
      FP.GAME_SCORE += 1;
    }
  };

  Rock.prototype.recalibratePosition = function() {
    this.position.x = (FP.NUMBER_OF_ROCKS * (FP.ROCK_DISTANCE + this.texture.width + this.getDeltaX())).toFixed(1);
  };

  Rock.prototype.getDeltaX = function() {
    return FP.isMobile() ? (Math.random() * 20 - 10) : (Math.random() * 40 - 20);
  };

  Rock.prototype.increaseDifficulty = function() {
    FP.CLOUDS_SPEED += this.speedIncrease;
    FP.GROUND_SPEED += this.speedIncrease;
    FP.ROCKS_SPEED += this.speedIncrease;
  };

  module.exports = Rock;

})();
