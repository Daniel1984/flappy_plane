(function() {
  'use strict';

  var PIXI = require('pixi.js'),
      Backdrop = require('../backdrop/main'),
      MessageBanner = require('../game_msg_banner/main'),
      TappingFinger = require('../tapping_finger/main'),
      TapLabel = require('../tap_label/main');

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
    this.mousedown = this.touchstart = this.notifyParentToRestart;
    this.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height);
  };

  Main.prototype.notifyParentToRestart = function() {
    this.parent.restartGame();
  };

  Main.prototype.addElements = function() {
    this.addBackdrop();
    this.addGameOverBanner();
    this.addTappingFinger();
    this.addTapLabel();
  };

  Main.prototype.addBackdrop = function() {
    this.addChild(new Backdrop(0x000000, 0.8));
  };

  Main.prototype.addGameOverBanner = function() {
    this.addChild(new MessageBanner('textGameOver'));
  };

  Main.prototype.addTappingFinger = function() {
    this.addChild(new TappingFinger());
  };

  Main.prototype.addTapLabel = function() {
    this.addChild(new TapLabel('tapRight'));
  };

  Main.prototype.update = function() {};

  module.exports = Main;

})();
