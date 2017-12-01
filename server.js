// initialize express app
var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();

// dependencies
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var expressHandlebars = require("express-handlebars");
var cheerio = require("cheerio");



app.use(bodyParser.urlencoded({
	extended: false
}));

// set view engine
app.engine("handlebars", expressHandlebars({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

mongoose.Promise = global.Promise;
// DATABASE CONNECTION
if (process.env.NODE_ENV == 'production'){
  mongoose.connect('#');
}
else{
  mongoose.connect('mongodb://localhost/MongoScrapper');
}

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});



// load static files to server
app.use(express.static('public'));


// LOAD MODELS
var Caption = require('./models/caption.js');

// LOAD CONTROLLERS
var router = require('./controller/scrapped.js');
app.use('/', router);

// SPIN SERVER
app.listen(PORT, function(){
  console.log('Listening on PORT ' + PORT);
});


