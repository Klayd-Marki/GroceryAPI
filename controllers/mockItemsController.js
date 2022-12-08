const { faker } = require("@faker-js/faker")



const items = [
    { id: 1, name: 'onion', category: "Vegetable", price: 2.99 },
    { id: 2, name: 'Apple', category: "Fruit", price: 4.19 },
    { id: 3, name: 'Carrot', category: "Vegetable", price: 2.99 },
    { id: 4, name: 'Potato', category: "Vegetable", price: 2.99 },
    { id: 5, name: 'Cherry', category: "Fruit", price: 6.99 },
    { id: 6, name: 'Strawberry', category: "Fruit", price: 7.99 },
    { id: 7, name: 'Cabbage', category: "Vegetable", price: 2.99 },
];


for (let i = 0; i < 10; i++) {
    const name = faker.commerce.product();
    const category = faker.commerce.productMaterial();
    const price = faker.finance.amount(5,10);
    console.log("n" + name,"\n", "C" + category ,"\n", "P" + price  );
}



exports.getAll = (req, res) => {
    res.send(items)
}


// FAKER Name
for (let i = 0; i < 20; i++) {
    const randomName = faker.name.fullName()
    console.log(randomName);
}

// FAKER category
for (let i = 0; i < 20; i++) {
    const category = faker.commerce.productMaterial()
    console.log(category);
}

//FAKER price
for (let i = 0; i < 20; i++) {
    const price = faker.commerce.price(100, 1000)
    console.log(price);
}


exports.createNew = (req, res) => {
    const lenght = items.push(req.body)
    items[lenght - 1] = { id: items[lenght - 2].id + 1, ...items[lenght - 1] }
    res.status(201).json(items[lenght - 1])

}

exports.getById = function (req, res) {

    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer." })
        return
    }
    let result = items.find(x => x.id === parseInt(req.params.id))

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
    const index = items.findIndex(x => x.id === parseInt(req.params.id))
    if (index === -1) {
        res.status(404).send({ error: "People not found." })
        return
    }

    items[index] = { ...items[index], ...req.body }

    res.status(200).json(items[index])
}


exports.deleteById = function (req, res) {

    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer." })
        return
    }
    const index = items.findIndex(x => x.id === parseInt(req.params.id))

    if (index === -1) {
        res.status(404).send({ error: "Item not found." })
        return
    }
    items.splice(index, 1)
    res.status(204).send()

}

exports.getPriceById = function(req, res) {
    if(!(parseInt(req.params.id) > 0)){
        res.status(400).send('Id must be a positive integer');
        return;
    }
    let result = item.find(item => item.id === parseInt(req.params.id));
    if(typeof (result) === 'undefined'){
        res.status(404).send('Id not found');
        return;
    }
    res.send(result.price);
};
