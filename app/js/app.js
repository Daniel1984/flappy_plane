window.FlappyPlane = {
  GAME_WIDTH: window.innerWidth,
  GAME_HEIGHT: window.innerHeight,
  GAME_OVER: true,
  CLOUDS_SPEED: 2,
  GROUND_SPEED: 6,
  ROCKS_SPEED: 5,
  NUMBER_OF_ROCKS: 4,
  ROCK_DISTANCE: Math.floor(window.innerWidth / 4),
  VERTICAL_GAP_BETWEEN_ROCKS: 50,
  PLANE_TAKE_OFF_SPEED: 5,
  PLANE_LANDING_SPEED: 7,
  PLANE_ROTATE_UP_SPEED: 0.1,
  PLANE_ROTATE_DOWN_SPEED: 0.1,
  PLANE_ROTATE_DOWN_MAX: 0.7,
  PLANE_ROTATE_UP_MAX: -0.4,
  PLANE_FALLING: true,
  PLANE_MAX_LIFT: 90,
  PLANE_OBSTICLES: [],
  PLANE_SCORE: 0,
  DEFAULT_PLANE: 'Yellow',
  AWAILABLE_PLANES: ['Yellow', 'Green', 'Blue', 'Red'],
  PLANE_PATH: 'app/img/Planes/',
  LANDSCAPE_PATH: 'app/img/landscape/',
  CLOUDS_PATH: '/img/spritesheets/',
  UI_PATH: 'app/img/ui/'
};

var Engine = require('./engine');

window.addEventListener('load', function() {
  new Engine();
}, false);

