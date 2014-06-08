(function() {
  'use strict';

  var PIXI = require('pixi.js');
  
  module.exports = new PIXI.AssetLoader([
      //'/img/spritesheets/landscape_sheet.json',
      FP.IS_NATIVE ? '../img/spritesheets/letters_sheet.json' : '/img/spritesheets/letters_sheet.json',
      FP.IS_NATIVE ? '../img/spritesheets/numbers_sheet.json' : '/img/spritesheets/numbers_sheet.json',
      FP.IS_NATIVE ? '../img/spritesheets/planes_sheet.json' :'/img/spritesheets/planes_sheet.json',
      FP.IS_NATIVE ? '../img/spritesheets/ui_sheet.json' : '/img/spritesheets/ui_sheet.json',
      FP.IS_NATIVE ? '../img/groundGrass.png' : '/img/groundGrass.png',
      FP.IS_NATIVE ? '../img/groundDirt.png' : '/img/groundDirt.png',
      FP.IS_NATIVE ? '../img/groundRock.png' : '/img/groundRock.png',
      FP.IS_NATIVE ? '../img/groundSnow.png' : '/img/groundSnow.png',
      FP.IS_NATIVE ? '../img/rockSnow.png' : '/img/rockSnow.png',
      FP.IS_NATIVE ? '../img/rockSnowDown.png' : '/img/rockSnowDown.png',
      FP.IS_NATIVE ? '../img/rockGrass.png' : '/img/rockGrass.png',
      FP.IS_NATIVE ? '../img/rockGrassDown.png' : '/img/rockGrassDown.png',
      FP.IS_NATIVE ? '../img/rock.png ' : '/img/rock.png',
      FP.IS_NATIVE ? '../img/rockDown.png' : '/img/rockDown.png',
      FP.IS_NATIVE ? '../img/spritesheets/background.png' : '/img/spritesheets/background.png'
    ]);

})();
