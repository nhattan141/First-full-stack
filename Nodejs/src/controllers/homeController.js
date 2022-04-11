import db from "../models/index"

let getHomePage = async (req, res) => {//request, respond
    try {
        let data = await db.User.findAll(); //Find all data in user table
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}
module.exports = {
    getHomePage: getHomePage,
}