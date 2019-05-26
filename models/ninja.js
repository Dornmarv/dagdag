var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create ninja schema & model
var NinjaSchema = new Schema({
  name: {
  	type: String,
  	required: [true, 'Name field is required']
  },
  rank: {
  	type: String
  },
  available: {
  	type: Boolean,
  	default: false
  }

  //add in geo location
});

var Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;