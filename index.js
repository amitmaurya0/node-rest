var express= require('express');
var bodyParser = require('body-parser');
var appRoutes = require('./route');
var app = express();



appRoutes(app);

app.listen(3000, function(){
	console.log("Running");
})