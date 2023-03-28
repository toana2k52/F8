const express = require('express');
const siteController = require('../app/controllers/SiteController');

const siteRouter = express.Router();

siteRouter.use('/', siteController.home);

module.exports = siteRouter;
