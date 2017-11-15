//var userSchema = require('./userSchema');
var user = {};
user.signup = function(req, res){
	console.log(req.body);
	res.send("this is signup");
}

module.exports = user;
