(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      Rock = require('./rock');

  function Main() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = FP.GAME_WIDTH;
    this.height = FP.GAME_HEIGHT;
    this.addRocks();
  }

  Main.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.update = function() {
    if(FP.GAME_OVER) return;
    this.children.forEach(function(child) { child.update(); });
  };

  Main.prototype.addRocks = function() {
    var texture, yPlacement, posX, rock;
    for(var i = 0; i < FP.NUMBER_OF_ROCKS; i += 1) {
      if(i % 2 === 0) {
        //texture = PIXI.Texture.fromFrame(FP.LANDSCAPE_PATH + 'rockSnow.png');
        texture = PIXI.Texture.fromFrame('/img/rockSnow.png');
        yPlacement = 'bottom';
      } else {
        //texture = PIXI.Texture.fromFrame(FP.LANDSCAPE_PATH + 'rockSnowDown.png');
        texture = PIXI.Texture.fromFrame('/img/rockSnowDown.png');
        yPlacement = 'top';
      }
      posX = FP.GAME_WIDTH + (FP.NUMBER_OF_ROCKS - i) * (FP.ROCK_DISTANCE + texture.width);
      rock = new Rock(texture, posX, yPlacement);
      FP.PLANE_OBSTICLES.push(rock);
      this.addChild(rock);
    }
  };

  module.exports = Main;

})();
