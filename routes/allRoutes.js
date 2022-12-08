const loginController = require("../controllers/loginController")
const itemsController = require("../controllers/itemController")
const signupController = require("../controllers/signupController")
const { requireAuth, checkUser, checkAdmin } = require('../middleware/auth.Middleware');
const mainController = require("../controllers/mainController");


const express = require("express")

module.exports = function(app){



    app.route("/login")
    .get(loginController.getLoginPage)
    .post(loginController.postLogin)

    app.route("/signup")
    .get(signupController.getSignUpPage)
    .post(signupController.postSignUp)

    app.route("/items")
    .get(itemsController.getAll)
    .post(itemsController.postnewItem)
    
    app.route("/items/:id")
    .get(itemsController.getById)                  //Read
    .delete(itemsController.deleteById)            //Delete

    app.route('/items/update/:id')
    .post(itemsController.editItem);                 //Update


    app.route('/')
    .get(mainController.getIndexPage);


    

    app.get('/admin', (req, res) => res.render('admin', { title:"AdminPage" }));
    
    app.route('/post')
    .get(mainController.getPostPage);

    app.get('/itemsadd', (req, res) => res.render('itemsadd', { title: "Add items" }));


    app.get('/itemsremove', (req, res) => res.render('itemsremove', { title: "Remove items" }));




 }