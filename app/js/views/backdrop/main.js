(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Main(color, alpha) {
    PIXI.Graphics.call(this);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
    this.beginFill(color, alpha);
    this.drawRect(0, 0, this.width, this.height);
    this.endFill();
  }

  Main.prototype = Object.create(PIXI.Graphics.prototype);
  Main.prototype.constructor = Main;

  module.exports = Main;

})();
