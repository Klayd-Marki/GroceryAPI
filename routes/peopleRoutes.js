const peoplesList = require("../controllers/mockPeopleController")

module.exports = function(app){
    app.route("/peoples")
    .get(peoplesList.getAll)
    .post(peoplesList.createNew)                 //Create 

    app.route("/peoples/:id")
    .get(peoplesList.getById)                  // Read
    .put(peoplesList.editById)                 //Update
    .delete(peoplesList.deleteById)            // Delete
}