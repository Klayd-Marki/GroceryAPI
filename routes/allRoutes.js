const peoplesList = require("../controllers/peopleController")
const loginController = require("../controllers/loginController")
const itemsController = require("../controllers/itemController")
const signupController = require("../controllers/signupController")
const express = require("express")

module.exports = function(app){
    app.route("/peoples")
    .get(peoplesList.getAll)
    .post(peoplesList.createNew)                 //Create 

    app.route("/peoples/:id")
    .get(peoplesList.getById)                  //Read
    .put(peoplesList.editById)                 //Update
    .delete(peoplesList.deleteById)            //Delete


    app.route("/login")
    .get(loginController.getLoginPage)
    .post(loginController.postLogin)

    app.route("/signup")
    .get(signupController.getSignUpPage)
    .post(signupController.postSignUp)

    app.route("/items")
    .get(itemsController.getMainPage)
    .post(itemsController.postnewItem)
    



 }





