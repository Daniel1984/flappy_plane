exports.project = function(pm) {

  var f = pm.filters(require('pm-spritesheet'));
  
  return {
    spritesheet: {
      files: 'app/img/landscape/*.png',
      dev: [
        f.spritesheet({ filename: 'landscape_sheet.png' })
      ]
    }
  };

};
