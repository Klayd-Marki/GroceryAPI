const itemController = require("../controllers/itemController")


module.exports = function (app) {
    app.route("/items")
        .post(itemController.getMainPage)
        .get(itemController.postnewItem)
}


