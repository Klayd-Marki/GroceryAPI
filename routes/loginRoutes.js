const loginController = require("../controllers/loginController")


 module.exports = function (app) {
    app.route("/login")
    .post(loginController.loginInfo)
    .get(loginController.loginPage)


 }


