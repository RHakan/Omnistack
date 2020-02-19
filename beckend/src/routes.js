const { Router } = require('express');
const routes = Router();
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const DeleteController = require('./controllers/DeleteController');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);
routes.delete('/devs/:github_username', DeleteController.index);

module.exports = routes;