(function() {
  'use strict';

  var PIXI = require('pixi.js');
//      Buzz = require('node-buzz');

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
    // this.playSound();
  }

  Plane.prototype = Object.create(PIXI.MovieClip.prototype);
  Plane.prototype.constructor = Plane;

  Plane.prototype.playSound = function() {
    this.planeSound = new Buzz.sound( "/sound/cartoon-pop", {
      formats: [ "ogg", "mp3", "aac" ]
    });
    this.planeSound.play().loop();
  };

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
          _this.triggerGameOver();
        }
      }
    });
  };

  Plane.prototype.triggerGameOver = function() {
    // this.planeSound.stop();
    FlappyPlane.GAME_OVER = true;
    this.parent.showGameOver();
  };

  module.exports = Plane;

})();
