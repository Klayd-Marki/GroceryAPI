
const app = require('express')()
const port = 8080
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/swagger.json')
const mongoose = require("mongoose")
const People = require("./models/peopleModel")
const bodyParser = require("body-parser")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/peopleApiDb")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require("./routes/peopleRoutes")(app)


/*
app.get('/people',(req,res)=>{
    res.send(peoples)
})
*/

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(port, () => {
  console.log(`API up at: http//localhost: ${port}`)
})



mongoose.connection.on('connected', () => {
  console.log('connected to mongodb oh hell yea');
});

mongoose.connection.on('error', () => {
  console.log('error connecting to mongodb oh hell yea')
});

