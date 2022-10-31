const peoplesList = require("../controllers/peopleController")
const loginController = require("../controllers/loginController")
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
    



 }





