(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Plane(texture, stageHeight) {
    PIXI.Sprite.call(this, texture);
    this.position.y = stageHeight / 2 - this.height / 2;
    this.position.x = 100;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.rotation = 0.5;
  }

  Plane.prototype = Object.create(PIXI.Sprite.prototype);
  Plane.constructor = Plane;

  Plane.prototype.update = function() {
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
  };

  module.exports = Plane;

})();
