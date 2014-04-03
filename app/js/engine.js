(function() {
  
  var PIXI = require('pixi.js'),
      AssetLoader = require('./asset_loader'),
      Clouds = require('./views/background/clouds'), 
      Ground = require('./views/background/ground'),
      Plane = require('./views/planes/main'),
      rockDown, rockUp, renderer,
      groundContainer = new PIXI.DisplayObjectContainer(),
      rocksContainer = new PIXI.DisplayObjectContainer(),
      WH = window.innerHeight, 
      WW = window.innerWidth,
      PLANE_FALLING = true;

  function Main() {
    window.addEventListener('load', this.onDomReady.bind(this), false);
    window.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    window.addEventListener('mouseup', this.onMouseUp.bind(this), false);
  }

  Main.prototype.onMouseDown = function() {
    PLANE_FALLING = false;
  };

  Main.prototype.onMouseUp = function() {
    PLANE_FALLING = true;
  };

  Main.prototype.onDomReady = function() {
    this.setupCanvas();
    this.loadAssets();
  };

  Main.prototype.setupCanvas = function() {
    this.stage = FlappyPlane.stage = new PIXI.Stage(0x000000, true);
    renderer = PIXI.autoDetectRenderer(WW, WH);
    document.body.appendChild(renderer.view);
  };

  Main.prototype.loadAssets = function() { 
    AssetLoader.onComplete = this.onDoneLoadingAssets.bind(this);
    AssetLoader.load();
  };

  Main.prototype.onDoneLoadingAssets = function() { 
    Clouds = new Clouds(PIXI.Texture.fromFrame("/img/background.png"), WW, WH);
    this.stage.addChild(Clouds);

    rockDown = PIXI.Sprite.fromFrame('/img/rockSnowDown.png');
    rockDown.position.y = -30;
    rockDown.position.x = 300;
    this.stage.addChild(rockDown);

    rockUp = PIXI.Sprite.fromFrame('/img/rockSnow.png');
    rockUp.position.y = WH - rockUp.height + 50;
    rockUp.position.x = 600;
    this.stage.addChild(rockUp);

    Ground = new Ground(PIXI.Texture.fromFrame("/img/groundGrass.png"), WW, WH);
    this.stage.addChild(Ground);

    Plane = new Plane(PIXI.Texture.fromFrame('/img/Planes/planeRed1.png'), WH);
    this.stage.addChild(Plane);

    initGameLoop();
  };
  
  function initGameLoop() {
    requestAnimationFrame(initGameLoop); 
    Clouds.tilePosition.x -= FlappyPlane.CLOUDS_SPEED;
    Ground.tilePosition.x -= FlappyPlane.GROUND_SPEED;
    if(PLANE_FALLING) {
      Plane.position.y += FlappyPlane.PLANE_LANDING_SPEED;
      if(Plane.rotation <= FlappyPlane.PLANE_ROTATE_DOWN_MAX) {
        Plane.rotation += FlappyPlane.PLANE_ROTATE_DOWN_SPEED;
      }
    } else {
      Plane.position.y -= FlappyPlane.PLANE_TAKE_OFF_SPEED;
      if(Plane.rotation >= FlappyPlane.PLANE_ROTATE_UP_MAX) {
        Plane.rotation -= FlappyPlane.PLANE_ROTATE_UP_SPEED;
      }
    }
    renderer.render(FlappyPlane.stage);
  }

  module.exports = Main;

})();
