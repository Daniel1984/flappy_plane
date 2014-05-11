Score = require(process.cwd() + "/models/score");

module.exports.index = function(req, res) {
  Score.index(function(scores, err) {
    if(err) return res.json({}, 422);
    res.json(scores, 200);
  });
};

module.exports.create = function(req, res) {
  Score.create(req.body, function(score, err) {
    if(err) return res.json(422, err)
    res.json({}, 200)
  });
};
