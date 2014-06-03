(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      BackDrop = require('../backdrop/main'),
      MessageBanner = require('../game_msg_banner/main'),
      TappingFinger = require('../tapping_finger/main'),
      TapLabel = require('../tap_label/main');

  function Main() {
    PIXI.DisplayObjectContainer.call(this);
    this.width = FP.getWidth();
    this.height = FP.getHeight();
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
    this.addChild(new MessageBanner('textGetReady'));
  };

  Main.prototype.addTappingFinger = function() {
    this.addChild(new TappingFinger());
  };

  Main.prototype.addTapLabel = function() {
    this.addChild(new TapLabel('tapRight'));
  };

  Main.prototype.beginGame = function(e) {
    FP.GAME_SCORE = 0;
    this.parent.removeChild(this);
    FP.GAME_OVER = false;
  };

  Main.prototype.update = function() {};

  module.exports = Main; 

})();
