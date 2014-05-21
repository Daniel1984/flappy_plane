(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Rock(texture, posX, yPlacement, height_delta) {
    PIXI.Sprite.call(this, texture); 
    window.shit = this;
    this.setupPositioning(posX, yPlacement, height_delta);
 }

  Rock.prototype = Object.create(PIXI.Sprite.prototype);
  Rock.prototype.constructor = Rock;

  Rock.prototype.setupPositioning = function(posX, yPlacement, height_delta) {
    this.height = Math.round(FP.GAME_HEIGHT / 2 - height_delta);
    var posY = yPlacement === 'bottom' ? FP.GAME_HEIGHT - this.height : 0;
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
    if(this.position.x + this.width / 2 < FP.GAME_WIDTH / 2) {
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
   // this.position.x = (FP.NUMBER_OF_ROCKS * (FP.ROCK_DISTANCE + this.getDeltaX())).toFixed(1);
    this.position.x = (FP.NUMBER_OF_ROCKS * (FP.ROCK_DISTANCE + this.texture.width + this.getDeltaX())).toFixed(1);
  };

  Rock.prototype.getDeltaX = function() {
    //return Math.floor(Math.random() * this.texture.width + this.texture.width);
    return Math.random() * 40 - 20;
  };

  Rock.prototype.increaseDifficulty = function() {
    FP.CLOUDS_SPEED += FP.GAME_SPEED_INCREASE;
    FP.GROUND_SPEED += FP.GAME_SPEED_INCREASE;
    FP.ROCKS_SPEED += FP.GAME_SPEED_INCREASE;
  };

  module.exports = Rock;

})();
