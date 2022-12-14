require('dotenv').config();
require("../models/itemsModel")
const mongoose = require("mongoose")
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
            // console.log("GetAll",items)
            res.json(items)
        }
    })
}


exports.createNew = function (req, res) {
    const newItem = new Item(req.body);
    newItem.save((err, item) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(201).json(item);
        }
    });
};

exports.postnewItem = (req, res) => {
    console.log(req.body);   //Create
    const new_item = new Item(req.body)
    new_item.save((err, item) => {
        if (err) {
            res.render("itemsadd", { title: "Error please fill in all the fields!" })
        } else {
            field1 = `${item.name}`
            field2 = `${item.price}`
            field3 = `${item.category}`

            console.log(`Added a new item`);
            res.redirect('items')
        }
    })
}


exports.editItem = function (req, res) {
    // edit item by id
    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer" })
        return
    }
   console.log('edit item req body: ',req.body);
   Item.updateOne({_id: (req.params.id)},{$set: req.body},null,(err,item)=>{
        
        if (err) {
            res.status(400).send(err)
        } else {
            console.log("edit item", item);
            
            res.status(200).redirect("/itemsremove")
        }
    })

};


exports.getById = async function (req, res) {    //Read

    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer" })
        return
    }
    Item.findOne({ _id: (req.params.id) }, (err, item) => {
        if (err) {
            res.status(400).send(err)
        } else {
            
            res.status(200).json(new itemDto(item))
        }
    })
    return
}


exports.editById = function (req, res) {
    // edit item by id
    Item.updateOne({ _id: req.params.itemId }, { $set: req.body }, null, (err, item) => {
        if (err) {
            res.send(err);
        } else {
            console.log(item);
            res.status(200).json(item);
        }
    });
};

exports.deleteById = function (req, res) {
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


exports.deleteItem = function (req, res) {
    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer" })
        return
    }
    console.log("deleted");
    Item.deleteOne({ _id: (req.params.id) }, (err, item) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200).json(item)
        }
    })
    




};