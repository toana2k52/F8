const express = require('express');
const serchController = require('../app/controllers/SearchController');

const searchRouter = express.Router();

searchRouter.use('/', serchController.search);
searchRouter.use('/:slug', serchController.searchResult);

module.exports = searchRouter;
