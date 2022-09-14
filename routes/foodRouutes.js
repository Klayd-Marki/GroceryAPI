const foodsList = require("../controllers/foodController")

module.exports = function(app){
    app.route("/foods")
    .get(foodsList.getAll)
    .post(foodsList.createNew)                 //Create 

    app.route("/foods/:id")
    .get(foodsList.getById)                  // Read
    .put(foodsList.editById)                 //Update
    .delete(foodsList.deleteById)            // Delete
}