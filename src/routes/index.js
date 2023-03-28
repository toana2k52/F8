const siteRoute = require('./site');
const newsRouter = require('./news');
const searchRouter = require('./search');

function routes(app) {
    app.use('/', siteRoute);
    app.use('/news', newsRouter);
    app.use('/search', searchRouter);
}

module.exports = routes;
