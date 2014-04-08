(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Plane() {
    var planeTextures = [];
    for(var i=0; i < 3; i++) {
      var texture = PIXI.Texture.fromFrame('app/img/PNG/Planes/planeRed' + (i+1) + '.png');
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
    if(this.position.y < FlappyPlane.GAME_HEIGHT) {
      if(FlappyPlane.PLANE_FALLING) {
        this.position.y += FlappyPlane.PLANE_LANDING_SPEED;
        if(this.rotation <= FlappyPlane.PLANE_ROTATE_DOWN_MAX) {
          this.rotation += FlappyPlane.PLANE_ROTATE_DOWN_SPEED;
        }
      } else {
        this.position.y -= FlappyPlane.PLANE_TAKE_OFF_SPEED;
        if(this.rotation >= FlappyPlane.PLANE_ROTATE_UP_MAX) {
          this.rotation -= FlappyPlane.PLANE_ROTATE_UP_SPEED;
        }
      }
    } else {
      FlappyPlane.GAME_OVER = true;
    }
  };

  module.exports = Plane;

})();
