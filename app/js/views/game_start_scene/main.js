(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      BackDrop = require('./backdrop'),
      GetReadyBanner = require('./get_ready_banner'),
      TappingFinger = require('./tapping_finger'),
      TapLabel = require('./tap_label');

  function Main() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = FlappyPlane.GAME_WIDTH;
    this.height = FlappyPlane.GAME_HEIGHT;
    this.setupInteractivity();
    this.addElements();
  }

  Main.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.setupInteractivity = function() {
    this.setInteractive(true);
    this.mousedown = this.touchstart = this.beginGame;
    this.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
  };
  
  Main.prototype.addElements = function() {
    this.addBackdrop();
    this.addGetReadyBanner();
    this.addTappingFinger();
    this.addTapLabel();
  };
  
  Main.prototype.addBackdrop = function() {
    this.addChild(new BackDrop(0x000000, 0.8));
  };

  Main.prototype.addGetReadyBanner = function() {
    this.addChild(new GetReadyBanner());
  };

  Main.prototype.addTappingFinger = function() {
    this.addChild(new TappingFinger());
  };

  Main.prototype.addTapLabel = function() {
    this.addChild(new TapLabel());
  };

  Main.prototype.beginGame = function(e) {
    FlappyPlane.GAME_OVER = false;
    this.children = [];
  };

  Main.prototype.update = function() {};

  module.exports = Main; 

})();
