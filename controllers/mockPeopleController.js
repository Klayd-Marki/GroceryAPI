const {faker} = require("@faker-js/faker")
const mongoose = require("mongoose")
const People = mongoose.model("People")


exports.getAll = (req, res) => {
    console.log("getAll")
    People.find({}, (err, peoples) => {
        console.log("err",err)
        console.log("peoples", peoples)

        if (err) {
            res.status(400).send(err)
        } else { res.json(peoples) }
    })
}

/*
// FAKER Name
for (let i = 0; i < 20; i++) {
    const randomName = faker.name.fullName()
    console.log(randomName);
} 
console.log("--------------------------------")
// FAKER material
for (let i = 0; i < 10; i++) {
    const randomMaterial = faker.commerce.productMaterial()
    console.log(randomMaterial);
} 
console.log("--------------------------------")
//FAKER price
for (let i = 0; i < 5; i++) {
    const price = faker.commerce.price(100,1000)
    console.log(price);
} 
console.log("--------------------------------")
//FAKER productName
for (let i = 0; i < 10; i++) {
    const productName = faker.commerce.productName()
    console.log(productName);
} */








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