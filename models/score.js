var db = require(process.cwd() + "/db/mongo");
var validate = require('mongoose-validator').validate;

var ScoreSchema = new db.Schema({
  name: {
    type: String,
    validate: validate('len', 1, 100)
   },
  score: {
    type: Number,
    required: true,
    max: 2000
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

var Score = db.mongoose.model('Score', ScoreSchema);

module.exports.create = function(score, cb) {
  Score(score).save(function(err, post) {
    if(err) return cb(null, err);
    cb(post, null);
  });
};

module.exports.index = function(cb) {
  Score.find().sort({ score: -1 }).limit(100).exec(function(err, scores) {
    if(err) return cb(null, err);
    cb(scores, null);
  });
};
