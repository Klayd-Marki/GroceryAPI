const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PeopleSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: "Name is mandatory"
    }, 
    gender: {
        type: String,
        required: "Name of the City is mandatory"
    },
    age: {
        type: Number,
        required: "Age is mandatory"

    },
    image: {
        type: String,
        required: "Image is mandatory"
    }
   

})


module.exports = mongoose.model("People", PeopleSchema)
