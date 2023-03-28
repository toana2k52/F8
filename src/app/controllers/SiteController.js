class SiteController {
    // [Get => home]
    home(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController();
