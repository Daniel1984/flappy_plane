(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function Main() {
    PIXI.Graphics.call(this);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
  }

  Main.prototype = Object.create(PIXI.Graphics.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.update = function() {
    // check differenc between old score and new if === then return else draw bar
    this.beginFill(0x0000FF);
    this.drawRect(0, 0, this.width, this.height);
    this.endFill();
  };

  module.exports = Main;
})();
