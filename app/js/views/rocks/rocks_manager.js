(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      Rock = require('./rock');

  function Main() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
    this.rocksCounter = 0;
  }

  Main.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.update = function() {
    if(FlappyPlane.GAME_OVER) return;
    this.children.forEach(function(child) { child.update(); });
    if(this.children.length === 0) this.addRocks();
  };

  Main.prototype.addRocks = function() {
    var numRocks = Math.floor(Math.random() * 5 + 2);
    var texture, yPlacement, posX, deltaX, rock;
    for(var i = 0; i < numRocks; i += 1) {
      if(i % 2 === 0) {
        texture = PIXI.Texture.fromFrame(FlappyPlane.TEXTURE_PATH + 'rockSnow.png');
        yPlacement = 'bottom';
        deltaX = -texture.width;
      } else {
        texture = PIXI.Texture.fromFrame(FlappyPlane.TEXTURE_PATH + 'rockSnowDown.png');
        yPlacement = 'top';
        deltaX = texture.width;
      }
      posX = FlappyPlane.GAME_WIDTH + (numRocks - i) * (FlappyPlane.ROCK_DISTANCE) + deltaX;
      rock = new Rock(texture, posX, yPlacement);
      FlappyPlane.PLANE_OBSTICLES.push(rock);
      this.addChild(rock);
    }
  };

  module.exports = Main;

})();
