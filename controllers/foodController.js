const mongoose = require("mongoose")
const Food = mongoose.model("Food")  // Food viitab schemale mis on modelis(foodModel.js)


exports.getAll = (req, res) => {
    Food.find({}, (err, food) => {
        if (err) {
            res.status(400).send(err)
        } else { res.json(food) }
    })
}
exports.createNew =  (req, res) => {
    const new_food = new Food(req.body)
    new_food.save((err,food)=>{
        if (err) {
            res.status(400).send(err)
        } else { res.status(201).json(food)}
    })
    
}



exports.getById = function (req, res) {

}
exports.editById = function (req, res) {

}
exports.deleteById = function (req, res) {

}

