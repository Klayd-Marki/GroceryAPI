const peoples=[
    {id:1, name:"Japheth Kolmas", age:22},
    {id:2, name:"Jaanus Meidla", age:34},
    {id:3, name:"Peeter Esimene", age:10},
    {id:4, name:"Karl Suur Kolmas", age:58},

]

exports.getAll = (req, res) => {
    res.send(peoples)
   
}
exports.createNew =  (req, res) => {

    
}



exports.getById = function (req, res) {

}
exports.editById = function (req, res) {

}
exports.deleteById = function (req, res) {

}