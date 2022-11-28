require ('dotenv').config();
const mongoose = require("mongoose")
require("../models/itemsModel")
const Item = mongoose.model("Item")
const itemDto = require('../models/itemDto')

 
exports.getMainPage = (req, res) => {
    res.render("items")
};

exports.getAll = (req, res) => {
    Item.find({}, (err, items) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.json(items)
        }
    })
}

exports.postnewItem= (req, res) => {
    let item = new item(req.body.newitem);
    item.saveitem();
    res.redirect('/items');
}

exports.deleteItem = (req,res)=>{
    console.log('Call from delete', req.body.checkbox);
    item.deleteItem(req.body.checkbox)
    res.redirect('/');

} 

exports.getById = async function (req, res) {    //Read
    
    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer" })
        return
    }
    Item.findOne({_id:(req.params.id)},(err,item)=>{
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(new itemDto(Item))
        }
    })      
    return
}
exports.getById = function(req, res) {

    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer" })
        return
    }
    Item.findOne({_id:(req.params.id)},(err,item)=>{
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(new itemDto(item))
        }
    })      
    return
};

exports.editById = function(req, res) {
    // edit item by id
    Item.updateOne({_id: req.params.itemId},{$set: req.body}, null, (err, item) => {
        if (err) {
            res.send(err);
        } else{
            console.log(item);
            res.status(200).json(item);
        }
        
    });

    
};

exports.deleteById = function(req, res) {
    // delete item by id
    Item.deleteOne({
        _id: req.params.itemId
    }, (err, item) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Item deleted successfully' });
    });

};