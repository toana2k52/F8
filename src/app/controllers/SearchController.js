class SearchController {
    // [Get => search]
    search(req, res) {
        res.render('news');
    }

    // [Get => /search/:slug]
    searchResult(req, res) {
        res.send('/news/:slug');
    }
}

module.exports = new SearchController();
