var express = require('express');

var exphbs  = require('express-handlebars');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var bcrypt = require('bcrypt');
var saltRounds = 10;
var myPlaintextPassword = 's0/\/\P4$$w0rD';
var someOtherPlaintextPassword = 'not_bacon';

var routes = require('./routes/api');

var session = require('express-session');

var Adminuser = require('./models/adminusers');



//set up express app
var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

app.use(express.static('public'));

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

var sessionChecker = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
    err.status = 401;
    return next(err);
  }
}


app.get('/', function (req, res) {
    res.render('login', {layout: false});
});

app.get('/login', function (req, res) {
    res.render('login', {layout: false});
});



// GET /logout
app.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.render('login', {layout: false});
      }
    });
  }
});

app.get('/register', function (req, res) {
    res.render('register', {layout: false});
});

app.get('/dashboard', sessionChecker, function (req, res, next) {
    res.render('home');
});

app.get('/users', function (req, res) {
    res.render('users');
});

app.get('/transactions', function (req, res) {
    res.render('transactions');
});

app.get('/reconcile-payment', function (req, res) {
    res.render('reconcile-payment');
});

app.get('/merchants', function (req, res) {
    res.render('merchants');
});

app.get('/new-merchant', function (req, res) {
    res.render('new-merchant');
});

app.get('/send-mail', function (req, res) {
    res.render('send-mail');
});

app.get('/admin-users', function (req, res) {
    res.render('admin-users');
});

app.get('/app-notification', function (req, res) {
    res.render('app-notification');
});

app.post('/register', function (req, res) {

Adminuser.create(req.body).then(function(adminuser) {});
res.render('home'); 

});

app.post('/register', function (req, res) {

Adminuser.create(req.body).then(function(adminuser) {});
res.render('home'); 
  
});







//initialize routes
app.use('/api',routes);

app.use(function(err,req,res,next){
   res.status(422).send({error: err.message});
});


//listen for requests
app.listen(process.env.port || 4000, function() {
	console.log('now listening for requests');
});