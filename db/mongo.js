var config = require('config');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

var username = config.database.user;
var password = config.database.pass;
var address = config.database.address;
var url = "mongodb://" + username + ":" + password + address;

mongoose.connect(url)
