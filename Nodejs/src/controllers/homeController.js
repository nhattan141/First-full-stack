let getHomePage = (req, res) => {//request, respond
    return res.render('homepage.ejs');
}
module.exports = {
    getHomePage: getHomePage,
}