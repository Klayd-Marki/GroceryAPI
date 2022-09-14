const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FoodSchema  = new Schema({
    name:{
        type:String,
        required: "Food name"
    },
     price:{
        type:Number,
        required: "Price is mandatory"

     }
})