(function() {
  'use strict';

  var PIXI = require('pixi.js');
  
  module.exports = new  PIXI.AssetLoader([
      '/img/background.png', 
      '/img/groundGrass.png',
      '/img/rockGrassDown.png',
      '/img/rockGrass.png',
      '/img/rockSnowDown.png',
      '/img/rockSnow.png',
      '/img/Planes/planeRed1.png'
      ]);

})();
