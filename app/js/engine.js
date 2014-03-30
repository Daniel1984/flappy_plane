(function() {
  
  var PIXI = require('pixi.js'),
      AssetLoader = require('./asset_loader'),
      clouds, ground, rockDown, rockUp, renderer,
      redPlane,
      groundContainer = new PIXI.DisplayObjectContainer(),
      rocksContainer = new PIXI.DisplayObjectContainer(),
      WH = window.innerHeight, 
      WW = window.innerWidth,
      PLANE_FALLING = true;

  function Main() {
    window.addEventListener('load', this.onDomReady.bind(this), false);
    window.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    window,addEventListener('mouseup', this.onMouseUp.bind(this), false);
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
    this.stage = window.flappyPlane.stage = new PIXI.Stage(0x000000, true);
    renderer = PIXI.autoDetectRenderer(WW, WH);
    document.body.appendChild(renderer.view);
  };

  Main.prototype.loadAssets = function() { 
    AssetLoader.onComplete = this.onDoneLoadingAssets.bind(this);
    AssetLoader.load();
  };

  Main.prototype.onDoneLoadingAssets = function() { 
    var cloudsTexture = PIXI.Texture.fromFrame("/img/background.png");
    clouds = new PIXI.TilingSprite(cloudsTexture, WW, WH);
    this.stage.addChild(clouds);

    rockDown = PIXI.Sprite.fromFrame('/img/rockSnowDown.png');
    rockDown.position.y = -30;
    rockDown.position.x = 300;
    this.stage.addChild(rockDown);

    rockUp = PIXI.Sprite.fromFrame('/img/rockSnow.png');
    rockUp.position.y = WH - rockUp.height + 50;
    rockUp.position.x = 600;
    this.stage.addChild(rockUp);

    var groundTexture = PIXI.Texture.fromFrame("/img/groundGrass.png");
    ground = new PIXI.TilingSprite(groundTexture, WW, groundTexture.baseTexture.height);
    ground.position.y = WH - groundTexture.baseTexture.height + 20;
    this.stage.addChild(ground);

    redPlane = PIXI.Sprite.fromFrame('/img/Planes/planeRed1.png');
    redPlane.position.y = WH / 2 - redPlane.height / 2;
    redPlane.position.x = 100;
    redPlane.anchor.x = 0.5;
    redPlane.anchor.y = 0.5;
    redPlane.rotation = 0.5;
    this.stage.addChild(redPlane);

    initGameLoop();
  };
  
  function initGameLoop() {
    requestAnimationFrame(initGameLoop); 
    clouds.tilePosition.x -= 2;
    ground.tilePosition.x -= 4;
    if(PLANE_FALLING) {
      redPlane.position.y += 7;
      if(redPlane.rotation <= 0.5) {
        redPlane.rotation += 0.1;
      }
    } else {
      redPlane.position.y -= 8;
      if(redPlane.rotation >= -0.5) {
        redPlane.rotation -= 0.1;
      }
    }
    renderer.render(window.flappyPlane.stage);
  }

  module.exports = Main;

})();
