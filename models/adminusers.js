var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

//create users schema & model
var AdminuserSchema = new Schema({
  fullname: {
  	type: String,
  	required: [true, 'fullname field is required']
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'username field is required']
  },
  password: {
    type: String,
    required: [true, 'Password field is required']
  },
  subadmin: {
    type: Boolean,
    default: true
  }

});


//authenticate input against database
AdminuserSchema.statics.authenticate = function (username, password, callback) {
  Adminuser.findOne({ username: username })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!adminuser) {
        var err = new Error('Adminuser not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, adminuser.password, function (err, result) {
        if (result === true) {
          return callback(null, adminuser);
        } else {
          return callback();
        }
      })
    });
}



//hashing a password before saving it to the database
AdminuserSchema.pre('save', function (next) {
  var adminuser = this;
  bcrypt.hash(adminuser.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    adminuser.password = hash;
    next();
  })
});


var Adminuser = mongoose.model('adminuser', AdminuserSchema);

module.exports = Adminuser;