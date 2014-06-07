var parser = require('user-agent-parser');

window.FP = { 
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
  PLANE_PATH: 'app/img/Planes/',
  LANDSCAPE_PATH: 'app/img/landscape/',
  CLOUDS_PATH: '/img/spritesheets/',
  LETTERS_PATH: 'app/img/Letters/',
  NUMBERS_PATH: 'app/img/Numbers/',
  UI_PATH: 'app/img/ui/',
  DEVICE: parser(navigator.userAgent).device.type, 
  IS_NATIVE: CocoonJS.App.nativeExtensionObjectAvailable,

  isMobile: function() {
    if(this.DEVICE && this.DEVICE === 'mobile') return true;
    return false;
  },

  getWidth: function() {
    if(this.isMobile() || this.IS_NATIVE || window.innerWidth < 720) return window.innerWidth;
    return 720;
  },

  getHeight: function() {
    if(this.isMobile() || this.IS_NATIVE || window.innerHeight < 640) return window.innerHeight;
    return 640;
  }
};

var Engine = require('./engine');
var Router = require('./web_ui/router');

window.addEventListener('load', function() {
  new Engine();
  FP.router = new Router();
  if(!FP.isMobile() || !FP.IS_NATIVE) document.body.className = 'desktop';
}, false);
