var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create transactions schema & model
var TransactionSchema = new Schema({
  user_id: {
  	type: String,
  	required: [true, 'User id field is required']
  },
  amount: {
    type: String,
    required: [true, 'Image is required']
  },
  rate: {
    type: String,
    required: [true, 'Secondrary limit field is required']
  },
  country: {
    type: String,
    required: [true, 'Secondrary limit field is required']
  },
  updated: { 
    type: Date, 
    default: Date.now() 
  },
  reciever_name: {
    type: String,
    required: [true, 'Secondrary limit field is required']
  },
  reciever_email: {
    type: String,
    required: [true, 'Secondrary limit field is required']
  },
  reciever_phone: {
    type: String,
    required: [true, 'Secondrary limit field is required']
  },
  payment: {
    type: Boolean,
    default: false
  }
  

});

var Transaction = mongoose.model('transaction', TransactionSchema);

module.exports = Transaction;