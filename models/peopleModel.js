const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PeopleSchema  = new Schema({
    name:{
        type:String,
        required: "Name is mandatory"
    },
     age:{
        type:Number,
        required: "Age is mandatory"

     }
})

module.exports = mongoose.model("People",PeopleSchema)