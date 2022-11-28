const {faker} = require("@faker-js/faker")
const mongoose = require("mongoose")
const People = mongoose.model("People")



const item = [
    {id:1, name: 'onion',category:"Vegetable", price: 2.99},
    {id:1, name: 'Apple',category:"Fruit", price: 4.19},
    {id:1, name: 'Carrot',category:"Vegetable", price: 2.99},
    {id:1, name: 'Potato',category:"Vegetable", price: 2.99},
    {id:1, name: 'Cherry',category:"Fruit", price: 6.99},
    {id:1, name: 'Strawberry',category:"Fruit", price: 7.99},
    {id:1, name: 'Cabbage',category:"Vegetable", price: 2.99},
];




/*exports.getAll = (req, res) => {
    console.log("getAll")
    People.find({}, (err, peoples) => {
        console.log("err",err)
        console.log("peoples", peoples)

        if (err) {
            res.status(400).send(err)
        } else { res.json(peoples) }
    })
}*/

exports.getAll = function(req, res) {
    res.send(item);
};


// FAKER Name
for (let i = 0; i < 20; i++) {
    const randomName = faker.name.fullName()
    console.log(randomName);
} 

//FAKER price
for (let i = 0; i < 5; i++) {
    const price = faker.commerce.price(100,1000)
    console.log(price);
} 









exports.createNew = (req, res) => {
    const lenght = peoples.push(req.body)
    peoples[lenght - 1] = { id: peoples[lenght - 2].id + 1, ...peoples[lenght - 1] }
    res.status(201).json(peoples[lenght - 1])

}




exports.getById = function (req, res) {

    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer." })
        return
    }
    let result = peoples.find(x => x.id === parseInt(req.params.id))

    if (typeof (result) === "undefined") {
        res.status(404).send({ error: "People not found." })
        return
    }
    res.send(result)
}


exports.editById = function (req, res) {

    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer." })
        return
    }
    const index = peoples.findIndex(x => x.id === parseInt(req.params.id))
    if (index === -1) {
        res.status(404).send({ error: "People not found." })
        return
    }

    peoples[index] = { ...peoples[index], ...req.body }

    res.status(200).json(peoples[index])
}


exports.deleteById = function (req, res) {

    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer." })
        return
    }
    const index = peoples.findIndex(x => x.id === parseInt(req.params.id))

    if (index === -1) {
        res.status(404).send({ error: "People not found." })
        return
    }
    peoples.splice(index, 1)
    res.status(204).send()

}