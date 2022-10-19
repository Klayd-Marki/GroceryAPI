const mongoose = require("mongoose")
const People = mongoose.model("people")
const  ClassTransformer = require  ('class-transformer')
const peopleDto = require('../models/peopleDto')


exports.getAll = (req, res) => {
    People.find({}, (err, people) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.json(people)
        }
    })
}



exports.createNew = (req, res) => {  
    console.log(req.body);   //Create
    const new_people = new people(req.body)
    new_people.save((err, people) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(201)
            .location(`${getBaseUrl(req)}/peoples/${people.id}`)
            .json(people)
        }
    })
}
exports.getById = async function (req, res) {    //Read
    
    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer" })
        return
    }
    people.findOne({_id:(req.params.id)},(err,people)=>{
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(new peopleDto(people))
        }
    })      
    return
}
exports.editById = function (req, res) {     //Update
    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer" })
        return
    }
   console.log(req.body,'selgitus');
   people.updateOne({_id:req.params.id},{$set: req.body},null,(err,people)=>{
        
        if (err) {
            res.status(400).send(err)
        } else {
            console.log(people);
            res.status(200).json(people)
        }
    })
    }


exports.deleteById = function (req, res) {   //Delete
    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer" })
        return
    }
    people.deleteOne({_id:(req.params.id)},(err,people)=>{
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json()
        }
    })  

}



function getBaseUrl(req){
    return req.connection && req.connection.encrypted
    ? 'https' : 'http' + `://${req.headers.host}`
}