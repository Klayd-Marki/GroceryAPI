
require("dotenv").config()
const app = require('express')()
const cors = require("cors")
const port = process.env.PORT
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json')
const mongoose = require("mongoose")
const People = require("./models/peopleModel")
const bodyParser = require("body-parser")
const {faker} = require("@faker-js/faker")
const MongoClient = require("mongodb").MongoClient;


mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/peopleApiDb")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require("./routes/allRoutes")(app)


/*
app.get('/people',(req,res)=>{
    res.send(peoples)
})
*/

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
  console.log(`API up at: http//localhost: ${port}`)
})

/* mySeedScript.js */

// require the necessary libraries


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
    // Connection URL
    const uri = "mongodb://localhost:27017/peopleApiDb";

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("peopleApiDb").collection("peoples");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        collection.drop();

        // make a bunch of time series data
        let timeSeriesData = [];

        for (let i = 0; i < 100; i++) {
            const firstName = faker.name.firstName();
            const age = faker.datatype.number({
              'min': 18,
              'max': 50
          });
            let grocerystore = {
              name: firstName,
              age: age
            }
            timeSeriesData.push(grocerystore)
          }
        collection.insertMany(timeSeriesData,(err,result)=>{
          if(err){
          }
          else{
            console.log("Database seeded! :)");
            console.log(result);
          }
        });
        
        setTimeout(() => {
          client.close();
        }, 1500);


    } catch (err) {
        console.log("SEED error:", err);
    }
}

seedDB();