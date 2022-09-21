const mongoose = require('mongoose' );
const peopleModel = require('./models/peopleModel');

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
            price: 10,
            category: "fruit"
        },
        {
            name: "carrot",
            price: 5,
            category: "vegetable"
        },
        {
            name: "watermelon",
            price: 20,
            category: "fruit"
        }
    ]


const seedDB = async () => {
    await peopleModel.deleteMany({});
    await peopleModel.insertMany(seedProducts);

};

seedDB().then(() => {
    mongoose.connection.close();
});

