class NewsController {
    // [Get => news]
    index(req, res) {        
        res.render('news');
    }
}
export default new NewsController;