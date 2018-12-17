//Requiring the dependecies
var express = require('express');
var bodyParser =  require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');
var mongoose = require('mongoose');


var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

//mongodb connection
var mongourl = "mongodb+srv://adminsrinivas:padma123@absolutes-hnf2v.mongodb.net/absolutesapartment?retryWrites=true";
var connect = mongoose.connect(mongourl,{ useNewUrlParser: true });
var dbconnection = mongoose.connection;
dbconnection.on('error',err => debug('MongoDB connection error: ${err}'));
//End of Connection






app.get('/',function(req,res){
	res.send("Absolutes Apartment Management");
});


app.get('/posts', function(req,res){
		console.log("posts!");
		res.json({"success":true});
	});


app.listen(3000);