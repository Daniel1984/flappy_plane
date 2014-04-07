(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Plane(texture) {
    PIXI.Sprite.call(this, texture);
    this.position.y = window.innerHeight / 2 - this.height / 2;
    this.position.x = window.innerWidth / 2 - this.width / 2;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.rotation = 0.5;
  }

  Plane.prototype = Object.create(PIXI.Sprite.prototype);
  Plane.constructor = Plane;

  Plane.prototype.update = function() {
    if(this.position.y < window.innerHeight) {
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
    }
  };

  module.exports = Plane;

})();
