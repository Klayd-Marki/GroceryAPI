const mongoose = require('mongoose' );
const peopleModel = require('../models/peopleModel');

mongoose
.connect('mongodb: //localhost:27017/test', {
useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>{
        console.log('MONGO CONNECTION OPEN!!!');
    })
    .catch((err) => {
    console. log(err);
    });


    const seedProducts = [
        {
            name: "banana",
            category: "fruit",
            price: 10,
        },
        {
            name: "carrot",
            category: "vegetable",
            price: 5,
        },
        {
            name: "watermelon",
            category: "fruit",
            price: 20,
        }
    ]


const seedDB = async () => {
    await peopleModel.deleteMany({});
    await peopleModel.insertMany(seedProducts);

};

seedDB().then(() => {
    mongoose.connection.close();
});

