(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Plane() {
    var planeTextures = [];
    for(var i=0; i < 3; i++) {
      var texturePath = FP.PLANE_PATH + 'plane' + FP.DEFAULT_PLANE; 
      var texture = PIXI.Texture.fromFrame(texturePath + (i+1) + '.png');
      planeTextures.push(texture);
    }
    PIXI.MovieClip.call(this, planeTextures);
    this.gotoAndPlay(1);
    this.position.y = Math.floor(FP.GAME_HEIGHT / 2 - this.height / 2);
    this.position.x = Math.floor(FP.GAME_WIDTH / 2 - this.width / 2);
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
  }

  Plane.prototype = Object.create(PIXI.MovieClip.prototype);
  Plane.prototype.constructor = Plane;

  Plane.prototype.update = function() {
    if(!FP.GAME_OVER) {
      this.controlPlane();
      this.detectRockCollision();
    }
  };

  Plane.prototype.controlPlane = function() {
    if(this.position.y < FP.GAME_HEIGHT) {
      this.levitatePlane();
    } else {
      this.triggerGameOver();
    }
  };

  Plane.prototype.levitatePlane = function() {
    if(FP.PLANE_FALLING) {
      this.dropDown();
    } else {
      this.liftUp();
    }
  };

  Plane.prototype.dropDown = function() {
    this.position.y += FP.PLANE_LANDING_SPEED;
    if(this.rotation <= FP.PLANE_ROTATE_DOWN_MAX) {
      this.rotation += FP.PLANE_ROTATE_DOWN_SPEED;
    }
  };

  Plane.prototype.liftUp = function() {
    if(this.position.y <= this.height / 2) return;
    this.position.y -= FP.PLANE_TAKE_OFF_SPEED;
    if(this.rotation >= FP.PLANE_ROTATE_UP_MAX) {
      this.rotation -= FP.PLANE_ROTATE_UP_SPEED;
    }
  };

  Plane.prototype.detectRockCollision = function() {
    var _this = this;
    FP.PLANE_OBSTICLES.forEach(function(obsticle) {  
      if(_this.position.x > obsticle.position.x && _this.position.x < obsticle.position.x + obsticle.width) {
        if(_this.position.y > obsticle.position.y && _this.position.y < obsticle.position.y + obsticle.height) {
          _this.triggerGameOver();
          _this.resetDifficulty(); 
        }
      }
    });
  };

  Plane.prototype.triggerGameOver = function() {
    FP.GAME_OVER = true;
    this.parent.showGameOver();
  };

  Plane.prototype.resetDifficulty = function() {
    FP.CLOUDS_SPEED = 2;
    FP.GROUND_SPEED = 6;
    FP.ROCKS_SPEED = 5;
  };

  module.exports = Plane;

})();
