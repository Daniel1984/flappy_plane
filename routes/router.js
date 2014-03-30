var homeCtrl = require(process.cwd() + '/controllers/home_controller');


module.exports = function(app) {
  
  app.get('/', homeCtrl.index);

}
