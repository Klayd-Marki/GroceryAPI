const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PeopleSchema  = new Schema({
    name:{
        type:String,
        unique: true,
        required: "Name is mandatory"
    },
     age:{
        type:Number,
        required: "Age is mandatory"

     },
     category: {
         type: String,
         lowercase: true
     }

})




module.exports = mongoose.model("People",PeopleSchema)
