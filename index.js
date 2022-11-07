
require("dotenv").config()
const cors = require("cors")
const port = 8000
const swaggerUi = require('swagger-ui-express')
const yamljs = require('yamljs');
const swaggerDocument = require('./docs/swagger.json')
const mongoose = require("mongoose")
const People = require("./models/peopleModel")
const bodyParser = require("body-parser")
const express = require("express")
const { faker } = require("@faker-js/faker")
const secret = process.env.secret
const app = express()



mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/peopleApiDb")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())

require("./routes/allRoutes")(app)




/*
app.get('/people',(req,res)=>{
    res.send(peoples)
})
*/

/* mySeedScript.js */

// require the necessary libraries

const MongoClient = require("mongodb").MongoClient;
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


app.get('/peoples', (req, res) => {
  //res.send(["Peeter Paan", "33"])

  if (!req.body.name || !req.body.age) {
    return res.status(400).send({ error: 'One or all params are missing' })
  }
  let people = {
    id: people.lenght + 1,
    name: req.body.name,
    age: req.body.age
  }
  peoples.push(people)

  res.status(201)
    .location(`${getBaseUrl(req)}/peoples/${peoples.lenght}`)
    .send(people)
})

app.delete('/peoples/:id',(req,res)=>{
  if (typeof peoples[req.params.is -1]==='undefined') {
    return res.status(404).send({error: "People not found"}) 
  }
  peoples.splice(req.params.id-1, 1)
  res.status(204).send({error: "No content"})
})


function getBaseUrl(req) {
  return req.connection && req.connection.encrypted
  ? 'https' :'http' + `://${req.headers.host}`
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

    const collection = client.db("peopleApiDb").collection("items");

    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.


    //     collection.drop();


    
    // make a bunch of time series data
    let timeSeriesData = [];

    for (let i = 0; i < 10; i++) {
      const firstName = faker.name.firstName();
      const price = faker.commerce.price(10,100)
      const age = faker.datatype.number({
        'min': 18,
        'max': 50
      });
      let grocerystore = {
        name: firstName,
        price: price,
        age: age
      }
      timeSeriesData.push(grocerystore)
    }

    
    collection.insertMany(timeSeriesData, (err, result) => {
      if (err) {
      }
      else {
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

app.set('view engine', 'ejs');
app.use(express.static('css'))



app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.listen(port, () => {
  console.log(`API up at: http//localhost: ${port}`)
})
