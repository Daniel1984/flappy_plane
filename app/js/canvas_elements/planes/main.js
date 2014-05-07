(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Plane() {
    var planeTextures = [];
    for(var i=0; i < 3; i++) {
      var texturePath = FlappyPlane.PLANE_PATH + 'plane' + FlappyPlane.DEFAULT_PLANE; 
      var texture = PIXI.Texture.fromFrame(texturePath + (i+1) + '.png');
      planeTextures.push(texture);
    }
    PIXI.MovieClip.call(this, planeTextures);
    this.gotoAndPlay(1);
    this.position.y = Math.floor(FlappyPlane.GAME_HEIGHT / 2 - this.height / 2);
    this.position.x = Math.floor(FlappyPlane.GAME_WIDTH / 2 - this.width / 2);
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
  }

  Plane.prototype = Object.create(PIXI.MovieClip.prototype);
  Plane.prototype.constructor = Plane;

  Plane.prototype.update = function() {
    if(!FlappyPlane.GAME_OVER) {
      this.controlPlane();
      this.detectRockCollision();
    }
  };

  Plane.prototype.controlPlane = function() {
    if(this.position.y < FlappyPlane.GAME_HEIGHT) {
      this.levitatePlane();
    } else {
      this.triggerGameOver();
    }
  };

  Plane.prototype.levitatePlane = function() {
    if(FlappyPlane.PLANE_FALLING) {
      this.dropDown();
    } else {
      this.liftUp();
    }
  };

  Plane.prototype.dropDown = function() {
    this.position.y += FlappyPlane.PLANE_LANDING_SPEED;
    if(this.rotation <= FlappyPlane.PLANE_ROTATE_DOWN_MAX) {
      this.rotation += FlappyPlane.PLANE_ROTATE_DOWN_SPEED;
    }
  };

  Plane.prototype.liftUp = function() {
    if(this.position.y <= this.height / 2) return;
    this.position.y -= FlappyPlane.PLANE_TAKE_OFF_SPEED;
    if(this.rotation >= FlappyPlane.PLANE_ROTATE_UP_MAX) {
      this.rotation -= FlappyPlane.PLANE_ROTATE_UP_SPEED;
    }
  };

  Plane.prototype.detectRockCollision = function() {
    var _this = this;
    FlappyPlane.PLANE_OBSTICLES.forEach(function(obsticle) {  
      if(_this.position.x > obsticle.position.x && _this.position.x < obsticle.position.x + obsticle.width) {
        if(_this.position.y > obsticle.position.y && _this.position.y < obsticle.position.y + obsticle.height) {
          _this.triggerGameOver();
          _this.resetDifficulty(); 
        }
      }
    });
  };

  Plane.prototype.triggerGameOver = function() {
    FlappyPlane.GAME_OVER = true;
    this.parent.showGameOver();
  };

  Plane.prototype.resetDifficulty = function() {
    FlappyPlane.CLOUDS_SPEED = 2;
    FlappyPlane.GROUND_SPEED = 6;
    FlappyPlane.ROCKS_SPEED = 5;
  };

  module.exports = Plane;

})();
