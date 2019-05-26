var express = require('express');

var router = express.Router();

var Ninja = require('../models/ninja');

var Adminuser = require('../models/adminusers');

var Merchant = require('../models/merchants');

var Transaction = require('../models/transactions');

var User = require('../models/users');


//get a list of admin users from database
router.get('/adminusers', function(req,res, next) {
	Adminuser.find({}).then(function(adminuser){
		res.send(adminuser);
	});
});

//get specific admin user from database
router.get('/adminusers/:id', function(req,res, next) {
	Adminuser.findOne({_id : req.params.id}).then(function(adminuser){
		res.send(adminuser);
	});
});

//add a new admin user to database
router.post('/adminusers', function(req,res, next) {
	//var ninja = new Ninja(req.body);
	//ninja.save();
	Adminuser.create(req.body).then(function(adminuser) {
		res.send(adminuser);
	}).catch(next);
	
});

//update a admin user in the database
router.put('/adminusers/:id', function(req,res, next) {
	Adminuser.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(adminuser){
		Adminuser.findOne({_id : req.params.id}).then(function(adminuser){
		res.send(adminuser);
	});
	});
});

//delete an admin user from the database
router.delete('/adminusers/:id', function(req,res, next) {
	Adminuser.findByIdAndRemove({_id : req.params.id}).then(function(adminuser){
		res.send(adminuser);
	});
});











//get a list of users from database
router.get('/users', function(req,res, next) {
	User.find({}).then(function(user){
		res.send(user);
	});
});

//get specific user from database
router.get('/users/:id', function(req,res, next) {
	User.findOne({_id : req.params.id}).then(function(user){
		res.send(user);
	});
});

//add a new user to database
router.post('/users', function(req,res, next) {
	//var ninja = new Ninja(req.body);
	//ninja.save();
	User.create(req.body).then(function(user) {
		res.send(user);
	}).catch(next);
	
});

//update a user in the database
router.put('/users/:id', function(req,res, next) {
	User.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(user){
		User.findOne({_id : req.params.id}).then(function(user){
		res.send(user);
	});
	});
});

































//get a list of ninjas from database
router.get('/ninjas', function(req,res, next) {
	Ninja.find({}).then(function(ninjas){
		res.send(ninjas);
	});
});

//get specific ninja from database
router.get('/ninjas/:id', function(req,res, next) {
	Ninja.findOne({_id : req.params.id}).then(function(ninja){
		res.send(ninja);
	});
});

//add a new ninja to database
router.post('/ninjas', function(req,res, next) {
	//var ninja = new Ninja(req.body);
	//ninja.save();
	Ninja.create(req.body).then(function(ninja) {
		res.send(ninja);
	}).catch(next);
	
});

//update a ninja in the database
router.put('/ninjas/:id', function(req,res, next) {
	Ninja.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(ninja){
		Ninja.findOne({_id : req.params.id}).then(function(ninja){
		res.send(ninja);
	});
	});
});

//delete a ninja from the database
router.delete('/ninjas/:id', function(req,res, next) {
	Ninja.findByIdAndRemove({_id : req.params.id}).then(function(ninja){
		res.send(ninja);
	});
});

module.exports = router;