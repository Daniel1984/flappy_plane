(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Backdrop(color, alpha) {
    PIXI.Graphics.call(this);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
    this.beginFill(color, alpha);
    this.drawRect(0, 0, this.width, this.height);
    this.endFill();
  }

  Backdrop.prototype = Object.create(PIXI.Graphics.prototype);
  Backdrop.prototype.constructor = Backdrop;

  module.exports = Backdrop;

})();
