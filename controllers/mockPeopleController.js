const peoples = [
    { id: 1, name: "Japheth Kolmas", age: 22 },
    { id: 2, name: "Jaanus Meidla", age: 34 },
    { id: 3, name: "Peeter Esimene", age: 10 },
    { id: 4, name: "Karl Suur Kolmas", age: 58 },

]

exports.getAll = (req, res) => {
    res.send(peoples)

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
    if (index===-1) {
        res.status(404).send({ error: "People not found." })
        return
    }

    peoples[index]={...peoples[index],...req.body}

    res.status(200).json(peoples[index])
}
exports.deleteById = function (req, res) {

    if (!(parseInt(req.params.id) > 0)) {
        res.status(400).send({ error: "ID must be a positive integer." })
        return
    }
    const index = peoples.findIndex(x => x.id === parseInt(req.params.id))

    if (index===-1) {
        res.status(404).send({ error: "People not found." })
        return
    }
    peoples.splice(index,1)
    res.status(204).send()

}