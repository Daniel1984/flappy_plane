(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      Rock = require('./rock');

  function Main() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
    this.addRocks();
  }

  Main.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.update = function() {
    if(FlappyPlane.GAME_OVER) return;
    this.children.forEach(function(child) { child.update(); });
  };

  Main.prototype.addRocks = function() {
    var texture, yPlacement, posX, rock;
    for(var i = 0; i < FlappyPlane.NUMBER_OF_ROCKS; i += 1) {
      if(i % 2 === 0) {
        texture = PIXI.Texture.fromFrame(FlappyPlane.TEXTURE_PATH + 'rockSnow.png');
        yPlacement = 'bottom';
      } else {
        texture = PIXI.Texture.fromFrame(FlappyPlane.TEXTURE_PATH + 'rockSnowDown.png');
        yPlacement = 'top';
      }
      posX = FlappyPlane.GAME_WIDTH + (FlappyPlane.NUMBER_OF_ROCKS - i) * (FlappyPlane.ROCK_DISTANCE + texture.width);
      rock = new Rock(texture, posX, yPlacement);
      FlappyPlane.PLANE_OBSTICLES.push(rock);
      this.addChild(rock);
    }
  };

  module.exports = Main;

})();
