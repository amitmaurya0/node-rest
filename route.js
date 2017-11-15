
var abc =require('./abc/abc');
module.exports = function(app){

	app.use('/about', abc);
}