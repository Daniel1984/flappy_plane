(function() {
  
  var PIXI = require('pixi.js'),
      AssetLoader = require('./asset_loader'),
      Clouds = require('./views/background/clouds'), 
      Ground = require('./views/background/ground'),
      Puffs = require('./views/puffs/puff_manager'),
      StartGameScene = require('./views/game_start_scene/main'),
      GameOverScene = require('./views/game_over_scene/main'),
      Plane = require('./views/planes/main');

  function Main() {
    PIXI.Stage.call(this, 0x000000, true);
    this.mousedown = this.touchstart = this.onScreenTouch;
    this.setupCanvas();
    this.loadAssets();
    this.initGameLoop();
  }

  Main.prototype = Object.create(PIXI.Stage.prototype);
  Main.prototype.constructor = Main;

  Main.prototype.onScreenTouch = function() {
    FlappyPlane.PLANE_FALLING = false;
  };

  Main.prototype.setupCanvas = function() {
    this.renderer = PIXI.autoDetectRenderer(FlappyPlane.GAME_WIDTH, FlappyPlane.GAME_HEIGHT, null, false, true);
    document.body.appendChild(this.renderer.view);
  };

  Main.prototype.loadAssets = function() { 
    AssetLoader.onComplete = this.onDoneLoadingAssets.bind(this);
    AssetLoader.load();
  };

  Main.prototype.showGameOver = function() {
    this.addChild(new GameOverScene());
  };

  Main.prototype.restartGame = function() {
    FlappyPlane.PLANE_OBSTICLES = [];
    this.children = [];
    this.onDoneLoadingAssets();
  };

  Main.prototype.onDoneLoadingAssets = function() { 
    var plane = new Plane();
    this.addChild(new Clouds());
    this.addChild(plane);
    this.addChild(new Puffs(plane));
    require('./views/rocks/list')(this); // adding rocks
    this.addChild(new Ground());
    this.addChild(new StartGameScene()); 
  };
  
  Main.prototype.initGameLoop = function() {
    requestAnimFrame(this.initGameLoop.bind(this));
    this.children.forEach(function(child) { child.update(); });
    this.renderer.render(this);
  };

  module.exports = Main;

})();
