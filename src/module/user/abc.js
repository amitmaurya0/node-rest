const routes = require('express').Router();

routes.get('/:name', (req, res) => {
  res.send(req.params.name);
});

module.exports = routes;