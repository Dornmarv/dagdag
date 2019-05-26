var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create merchant schema & model
var MerchantSchema = new Schema({
  name: {
  	type: String,
  	required: [true, 'Name field is required']
  },
  image: {
    type: String,
    required: [true, 'Image is required']
  },
  slimit: {
    type: String,
    required: [true, 'Secondrary limit field is required']
  },
  channel: {
    type: String,
    required: [true, 'Secondrary limit field is required']
  }
  

});

var Merchant = mongoose.model('merchant', MerchantSchema);

module.exports = Merchant;