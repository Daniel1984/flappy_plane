(function() {
  'use strict';

  var PIXI = require('pixi.js');

  function TappingFinger() {
    var fingerTextures = [
      PIXI.Texture.fromFrame(FlappyPlane.TEXTURE_PATH + 'tap.png'),
      PIXI.Texture.fromFrame(FlappyPlane.TEXTURE_PATH + 'tapTick.png')];
    PIXI.MovieClip.call(this, fingerTextures);
    this.animationSpeed = 0.1;
    this.gotoAndPlay(1);
    this.position.x = FlappyPlane.GAME_WIDTH / 2 + this.width;
    this.position.y = FlappyPlane.GAME_HEIGHT / 2 + (this.height - 30);
  }

  TappingFinger.prototype = Object.create(PIXI.MovieClip.prototype);
  TappingFinger.prototype.constructor = TappingFinger;

  module.exports = TappingFinger;

})();
