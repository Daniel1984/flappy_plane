exports.project = function(pm) {

  var f = pm.filters(require('pm-spritesheet'));
  
  return {
    spritesheet: {
      files: 'app/img/PNG/Planes/planeRed*.png',
      dev: [
        f.spritesheet({filename: 'sprite_sheet.png', root: 'app/img/raw'})
      ]
    }
  };

};
