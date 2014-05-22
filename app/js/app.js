var parser = require('user-agent-parser');

window.FP = { 
  GAME_WIDTH: window.innerWidth,
  GAME_HEIGHT: window.innerHeight,
  GAME_OVER: true,
  GAME_SPEED_INCREASE: 0.2,
  GAME_MOBILE_SPEED_INCREASE: 0.1,
  GAME_SCORE: 0,
  GAME_HIGH_SCORE: 0,
  CLOUDS_SPEED: 2,
  GROUND_SPEED: 6,
  ROCKS_SPEED: 5,
  NUMBER_OF_ROCKS: 4,
  ROCK_DISTANCE: Math.floor(window.innerWidth / 4),
  VERTICAL_GAP_BETWEEN_ROCKS: 50,
  PLANE_TAKE_OFF_SPEED: 6,
  PLANE_LANDING_SPEED: 8,
  PLANE_ROTATE_UP_SPEED: 0.1,
  PLANE_ROTATE_DOWN_SPEED: 0.1,
  PLANE_ROTATE_DOWN_MAX: 0.7,
  PLANE_ROTATE_UP_MAX: -0.4,
  PLANE_FALLING: true,
  PLANE_MAX_LIFT: 90,
  PLANE_OBSTICLES: [],
  DEFAULT_PLANE: 'Yellow',
  AWAILABLE_PLANES: ['Yellow', 'Green', 'Blue', 'Red'],
  PLANE_PATH: 'app/img/Planes/',
  LANDSCAPE_PATH: 'app/img/landscape/',
  CLOUDS_PATH: '/img/spritesheets/',
  LETTERS_PATH: 'app/img/Letters/',
  NUMBERS_PATH: 'app/img/Numbers/',
  DEVICE: parser(navigator.userAgent).device.type,
  UI_PATH: 'app/img/ui/',
  IS_MOBILE: function() {
    if(this.DEVICE && this.DEVICE === 'mobile') return true;
    return false;
  }
};

var Engine = require('./engine');
var Router = require('./web_ui/router');

// var scaleToFitX = FP.GAME_WIDTH / 800;
// var scaleToFitY = FP.GAME_HEIGHT / 480;
// var currentScreenRatio = FP.GAME_WIDTH / FP.GAME_HEIGHT;
// var optimalRatio = Math.min(scaleToFitX, scaleToFitY);

window.addEventListener('load', function() {
  new Engine();
  FP.router = new Router();

//  var canvas = document.getElementsByTagName('canvas')[0];

//  this.addEventListener('resize', function() {
//    if (currentScreenRatio >= 1.77 && currentScreenRatio <= 1.79) {
//      canvas.style.width = gameWidth + "px";
//      canvas.style.height = gameHeight + "px";
//    } else {
//      canvas.style.width = 800 * optimalRatio + "px";
//      canvas.style.height = 480 * optimalRatio + "px";
//    }
//  }, false);

}, false);
