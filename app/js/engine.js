(function() {
  
  var PIXI = require('pixi.js'),
      AssetLoader = require('./asset_loader'),
      Clouds = require('./views/background/clouds'), 
      Ground = require('./views/background/ground'),
      Plane = require('./views/planes/main');

  function Main() {
    var touchStart = 'ontouchstart' in window ? 'touchstart' : 'mousedown';
    var touchEnd = 'ontouchend' in window ? 'touchend' : 'mouseup';
    window.addEventListener('load', this.onDomReady.bind(this), false);
    window.addEventListener(touchStart, this.onMouseDown.bind(this), false);
    window.addEventListener(touchEnd, this.onMouseUp.bind(this), false);
  }

  Main.prototype.onMouseDown = function() {
    FlappyPlane.PLANE_FALLING = false;
  };

  Main.prototype.onMouseUp = function() {
    FlappyPlane.PLANE_FALLING = true;
  };

  Main.prototype.onDomReady = function() {
    this.setupCanvas();
    this.loadAssets();
  };

  Main.prototype.setupCanvas = function() {
    this.stage = new PIXI.Stage(0x000000, true);
    this.renderer = PIXI.autoDetectRenderer(FlappyPlane.GAME_WIDTH, FlappyPlane.GAME_HEIGHT);
    document.body.appendChild(this.renderer.view);
  };

  Main.prototype.loadAssets = function() { 
    AssetLoader.onComplete = this.onDoneLoadingAssets.bind(this);
    AssetLoader.load();
  };

  Main.prototype.onDoneLoadingAssets = function() { 
    this.stage.addChild(new Clouds(PIXI.Texture.fromFrame("/img/background.png")));
    this.stage.addChild(new Plane());
    require('./views/rocks/list')(this.stage); // adding rocks
    this.stage.addChild(new Ground(PIXI.Texture.fromFrame("/img/groundGrass.png")));
    this.initGameLoop();
  };
  
  Main.prototype.initGameLoop = function() {
    requestAnimFrame(this.initGameLoop.bind(this)); 
    this.stage.children.forEach(function(child) { child.update(); });
    this.renderer.render(this.stage);
  };

  module.exports = Main;

})();
