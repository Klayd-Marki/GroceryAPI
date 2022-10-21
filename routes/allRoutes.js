const peoplesList = require("../controllers/mockPeopleController")
const itemController = require("../controllers/itemController")
const express = require("express")
const router = express.Router();

module.exports = function(app){
    app.route("/peoples")
    .get(peoplesList.getAll)
    .post(peoplesList.createNew)                 //Create 

    app.route("/peoples/:id")
    .get(peoplesList.getById)                  //Read
    .put(peoplesList.editById)                 //Update
    .delete(peoplesList.deleteById)            //Delete
}


//router.post('/items', itemController);
