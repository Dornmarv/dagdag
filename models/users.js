var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create users schema & model
var UserSchema = new Schema({
  firstname: {
  	type: String,
  	required: [true, 'firstname field is required']
  },
  lastname: {
    type: String,
    required: [true, 'lastname field is required']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email field is required']
  },
  phone: {
    type: String,
    unique: true,
    required: [true, 'Phone number field is required']
  },
  country: {
    type: String,
    required: [true, 'country field is required']
  },
  available: {
    type: Boolean,
    default: true
  },
  pverified: {
  	type: Boolean,
  	default: false
  },
  sverified: {
    type: Boolean,
    default: false
  }

});

var User = mongoose.model('user', UserSchema);

module.exports = User;