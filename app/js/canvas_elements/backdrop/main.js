(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Backdrop(color, alpha) {
    PIXI.Graphics.call(this);
    this.width = FP.getWidth();
    this.height = FP.getHeight();
    this.beginFill(color, alpha);
    this.drawRect(0, 0, this.width, this.height);
    this.endFill();
  }

  Backdrop.prototype = Object.create(PIXI.Graphics.prototype);
  Backdrop.prototype.constructor = Backdrop;

  module.exports = Backdrop;

})();
