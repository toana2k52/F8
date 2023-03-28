class NewsController {
    // [Get => news]
    news(req, res) {
        res.render('news');
    }

    // [Get => /news/:slug]
    newsDetail(req, res) {
        res.send('/news/:slug');
    }
}

module.exports = new NewsController();
