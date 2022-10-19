const signupController = require("../controllers/signupController")


 module.exports = function (app) {
    app.route("/signup")
    .post(signupController.signupInfo)
    .get(signupController.signupPage)


 }


