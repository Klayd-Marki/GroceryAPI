const mongoose = require("mongoose")
const People = mongoose.model("People")  // People viitab schemale mis on modelis(peopleModel.js)


exports.getAll = (req, res) => {
    People.find({}, (err, peoples) => {
        if (err) {
            res.status(400).send(err)
        } else { res.json(peoples) }
    })
}
exports.createNew =  (req, res) => {
    if (!req.body.name|| !req.body.age) {
        return res.status(400).send({error:"One or all params are missing"})
    }
    const new_people = new People(req.body)
    new_people.save((err,food)=>{
        if (err) {
            res.status(400).send(err)
        } else { res.status(201).location(`${getBaseUrl(req)}/peoples/${people.id}`).json(food)}
    })
    
}



exports.getById = function (req, res) {
    People.findById(req.params.id, (err, peoples) => {
        if (err) {
            res.status(400).send({error:"People not found"})
        } else { res.json(peoples) }
    })
    
}
exports.editById = function (req, res) {

}
exports.deleteById = function (req, res) {

}

function getBaseUrl(req) {
    return (req.connection && req.connection.encryoted? "https":"http")+`://${req.headers.host}`
    
}

