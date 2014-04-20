(function() {
  'use strict';
  
  var PIXI = require('pixi.js');

  function Main(puffName) {
    var texture = PIXI.Texture.fromFrame(FlappyPlane.TEXTURE_PATH + puffName + '.png'); 
    PIXI.Sprite.call(this, texture);
    this.width = texture.width;
    this.height = texture.height;
    this.alpha = 1;
    this.anchor.x = 0;
    this.anchor.y = 0;
  }

  Main.prototype = Object.create(PIXI.Sprite.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.update = function() {
    if(this.alpha <= 0) {
      this.parent.removeChild(this);
    } else {
      this.alpha -= 0.01;
      this.scale.x += 0.02;
      this.scale.y += 0.02;
      this.position.x -= FlappyPlane.ROCKS_SPEED;
    }
  };

  module.exports = Main;

})();
