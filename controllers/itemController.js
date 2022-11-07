require ('dotenv').config();
const mongoose = require("mongoose")
require("../models/itemsModel")
const Item = mongoose.model("Item")
const itemDto = require('../models/itemDto')

 
exports.getMainPage = (req, res) => {
    res.render('index')
};

exports.getAll = (req, res) => {
    Item.find({}, (err, item) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render("index.html")
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