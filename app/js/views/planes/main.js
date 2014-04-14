(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Plane() {
    var planeTextures = [];
    for(var i=0; i < 3; i++) {
      var texturePath = FlappyPlane.TEXTURE_PATH + 'plane' + FlappyPlane.DEFAULT_PLANE; 
      var texture = PIXI.Texture.fromFrame(texturePath + (i+1) + '.png');
      planeTextures.push(texture);
    }
    PIXI.MovieClip.call(this, planeTextures);
    this.gotoAndPlay(1);
    this.position.y = FlappyPlane.GAME_HEIGHT / 2 - this.height / 2;
    this.position.x = FlappyPlane.GAME_WIDTH / 2 - this.width / 2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.rotation = 0.5;
  }

  Plane.prototype = Object.create(PIXI.MovieClip.prototype);
  Plane.constructor = Plane;

  Plane.prototype.update = function() {
    this.controlPlane();
    this.detectRockCollision();
  };

  Plane.prototype.controlPlane = function() {
    if(!FlappyPlane.GAME_OVER) {
      if(this.position.y < FlappyPlane.GAME_HEIGHT) {
        if(FlappyPlane.PLANE_FALLING) {
          this.dropDown();
        } else {
          this.liftUp();
        }
      } else {
        FlappyPlane.GAME_OVER = true;
        this.gotoAndStop(0);
      }
    }
  };

  Plane.prototype.dropDown = function() {
    this.position.y += FlappyPlane.PLANE_LANDING_SPEED;
    if(this.rotation <= FlappyPlane.PLANE_ROTATE_DOWN_MAX) {
      this.rotation += FlappyPlane.PLANE_ROTATE_DOWN_SPEED;
    }
  };

  Plane.prototype.liftUp = function() {
    this.position.y -= FlappyPlane.PLANE_TAKE_OFF_SPEED;
    if(this.rotation >= FlappyPlane.PLANE_ROTATE_UP_MAX) {
      this.rotation -= FlappyPlane.PLANE_ROTATE_UP_SPEED;
    }
  };

  Plane.prototype.detectRockCollision = function() {
    var posX = this.position.x;
    var posY = this.position.y;
    var _this = this;
    FlappyPlane.PLANE_OBSTICLES.forEach(function(obsticle) {  
      if(posX > obsticle.position.x && posX < obsticle.position.x + obsticle.width) {
        if(posY > obsticle.position.y && posY < obsticle.position.y + obsticle.height) {
          FlappyPlane.GAME_OVER = true;
          _this.gotoAndStop(0);
        }
      }
    });
  };

  module.exports = Plane;

})();
