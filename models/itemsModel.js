const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: "Name is mandatory"
    },
    category: {
        type: String,
        lowercase: true,
        required: "Category is mandatory"
    },

    price: {
        type: String,
        lowercase: true,
        required: "Price is mandatory"


    },
    image: {
        type: String,
        lowercase: true
    }




})


module.exports = mongoose.model("Item", ItemSchema)
