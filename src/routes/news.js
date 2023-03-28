const express = require('express');
const newsController = require('../app/controllers/NewsController');

const newsRouter = express.Router();

newsRouter.use('/', newsController.news);
newsRouter.use('/:slug', newsController.newsDetail);

module.exports = newsRouter;
