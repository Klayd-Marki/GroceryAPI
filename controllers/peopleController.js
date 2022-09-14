const mongoose = require("mongoose")
const People = mongoose.model("People")  // People viitab schemale mis on modelis(peopleModel.js)


exports.getAll = (req, res) => {
    People.find({}, (err, poeple) => {
        if (err) {
            res.status(400).send(err)
        } else { res.json(poeple) }
    })
}
exports.createNew =  (req, res) => {
    const new_people = new People(req.body)
    new_people.save((err,food)=>{
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

