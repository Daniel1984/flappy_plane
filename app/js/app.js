window.FlappyPlane = {
  GAME_WIDTH: window.innerWidth,
  GAME_HEIGHT: window.innerHeight,
  GAME_OVER: false,
  CLOUDS_SPEED: 2,
  GROUND_SPEED: 6,
  ROCKS_SPEED: 5,
  NUMBER_OF_ROCKS: 4,
  ROCK_DISTANCE: 300,
  PLANE_TAKE_OFF_SPEED: 5,
  PLANE_LANDING_SPEED: 7,
  PLANE_ROTATE_UP_SPEED: 0.3,
  PLANE_ROTATE_DOWN_SPEED: 0.2,
  PLANE_ROTATE_DOWN_MAX: 0.7,
  PLANE_ROTATE_UP_MAX: -0.3,
  PLANE_FALLING: true
};

var Engine = require('./engine');
new Engine();
