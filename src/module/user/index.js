var user = require('./user');
const routes = require('express').Router();

routes.post('/signup', user.signup);

routes.post('/', (req, res) => {
  res.sendStatus(200);
 console.log(req.body);
});

module.exports = routes;