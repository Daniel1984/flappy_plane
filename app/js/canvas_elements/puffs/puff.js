(function() {
  'use strict';
  
  var PIXI = require('pixi.js');

  function Main(puffName) {
    var texture = PIXI.Texture.fromFrame(FP.PLANE_PATH + puffName + '.png'); 
    PIXI.Sprite.call(this, texture);
  }

  Main.prototype = Object.create(PIXI.Sprite.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.update = function() {
    if(this.position.x < -this.width) {
      this.parent.removeChild(this);
    } else {
      //this.alpha -= 0.01;
      this.scale.x += 0.02;
      this.scale.y += 0.02;
      this.position.x -= FP.ROCKS_SPEED;
    }
  };

  module.exports = Main;

})();
