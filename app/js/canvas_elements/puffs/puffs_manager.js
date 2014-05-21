(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      Puff = require('./puff');

  function Main(planeRef) {
    PIXI.DisplayObjectContainer.call(this);
    this.width = FP.GAME_WIDTH;
    this.height = FP.GAME_HEIGHT;
    this.plane = planeRef;
    this.puffCounter = 0;
  }

  Main.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.update = function() {
    if(FP.GAME_OVER) return;
    this.children.forEach(function(child) {
      child.update();
    });
    if(this.puffCounter > 12) {
      this.addPuffs();
      this.puffCounter = 0;
    }
    this.puffCounter += 1;
  };

  Main.prototype.addPuffs = function() {
    var puff = new Puff('puffSmall');
    puff.position.x = this.plane.position.x - this.plane.width + 15;
    puff.position.y = this.plane.position.y;
    this.addChild(puff);
  };

  module.exports = Main;
})();
