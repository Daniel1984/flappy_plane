(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      Rock = require('./item');

  module.exports = function(stage) {
    var yPlacement = null,
        texture = null,
        posX = null,
        rock = null;

    for(var i = 0, len = FlappyPlane.NUMBER_OF_ROCKS; i < len; i += 1) {
      if(i % 2 === 0) {
        texture = PIXI.Texture.fromFrame(FlappyPlane.TEXTURE_PATH + 'rockSnow.png');
        yPlacement = 'bottom';
      } else {
        texture = PIXI.Texture.fromFrame(FlappyPlane.TEXTURE_PATH + 'rockSnowDown.png');
        yPlacement = 'top';
      }
      posX = FlappyPlane.GAME_WIDTH + (len - i) * (FlappyPlane.ROCK_DISTANCE + texture.width);
      rock = new Rock(texture, posX, yPlacement);
      FlappyPlane.PLANE_OBSTICLES.push(rock);
      stage.addChild(rock);
    }

  };

})();
