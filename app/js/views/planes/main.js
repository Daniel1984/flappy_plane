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

  Plane.constructor = Plane;
  Plane.prototype = Object.create(PIXI.Sprite.prototype);

  module.exports = Plane;

})();
