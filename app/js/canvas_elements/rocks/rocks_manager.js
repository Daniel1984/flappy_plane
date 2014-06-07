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
    var texture, yPlacement, posX, rock, height_delta;
    var availableRocks = ['', 'Snow', 'Grass'];
    var randomRock = availableRocks[Math.floor(Math.random() * 3)];
    var textureUp = PIXI.Texture.fromFrame('/img/rock' + randomRock + '.png');
    var textureDown = PIXI.Texture.fromFrame('/img/rock' + randomRock + 'Down.png');
    for(var i = 0; i < FP.NUMBER_OF_ROCKS; i += 1) {
      if(i === 0 || i === 2) {
        height_delta = 30; 
        texture = textureUp;
        yPlacement = 'bottom';
      }
      if (i === 1 || i === 3) {
        height_delta = 60; 
        texture = textureDown;
        yPlacement = 'top';
      }
      posX = FP.getWidth() + (FP.NUMBER_OF_ROCKS - i) * (FP.ROCK_DISTANCE + texture.width);
      rock = new Rock(texture, posX, yPlacement, height_delta);
      FP.PLANE_OBSTICLES.push(rock);
      this.addChild(rock);
    }
  };

  module.exports = Main;

})();
