var homeCtrl = require(process.cwd() + '/controllers/home_controller');
var scoresCtrl = require(process.cwd() + '/controllers/scores_controller');

module.exports = function(app) {
  
  app.get('/', homeCtrl.index);
  
  app.get('/scores', scoresCtrl.index);
  app.post('/scores', scoresCtrl.create);

}
