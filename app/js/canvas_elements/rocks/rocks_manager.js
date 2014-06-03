(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      Rock = require('./rock');

  function Main() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = FP.getWidth();
    this.height = FP.getHeight();
    this.addRocks();
  }

  Main.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.update = function() {
    if(FP.GAME_OVER) return;
    this.children.forEach(function(child) { child.update(); });
  };

  Main.prototype.addRocks = function() {
    var texture, yPlacement, posX, rock, width_delta;
    for(var i = 0; i < FP.NUMBER_OF_ROCKS; i += 1) {
      switch(i) {
        case 0:
          width_delta = -10; 
          texture = PIXI.Texture.fromFrame('/img/rockSnow.png');
          yPlacement = 'bottom';
          break;
        case 1:
          width_delta = 50; 
          texture = PIXI.Texture.fromFrame('/img/rockSnowDown.png');
          yPlacement = 'top';
          break;
        case 2:
          width_delta = 50; 
          texture = PIXI.Texture.fromFrame('/img/rockSnow.png');
          yPlacement = 'bottom';
          break;
        case 3:
          width_delta = -10;
          texture = PIXI.Texture.fromFrame('/img/rockSnowDown.png');
          yPlacement = 'top';
          break;
      }
      posX = FP.getWidth() + (FP.NUMBER_OF_ROCKS - i) * (FP.ROCK_DISTANCE + texture.width);
      rock = new Rock(texture, posX, yPlacement, width_delta);
      FP.PLANE_OBSTICLES.push(rock);
      this.addChild(rock);
    }
  };

  module.exports = Main;

})();
