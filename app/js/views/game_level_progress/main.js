(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      ProgressBar = require('./progress_bar.js');

  function Main() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
  }

  Main.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.update = function() {
    this.children.forEach(function(child) { child.update(); });
  };

  module.exports = Main;

})();
