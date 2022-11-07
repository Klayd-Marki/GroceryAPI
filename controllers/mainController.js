const app = require('express')()

const passport = require('passport');
const swaggerUi = require('swagger-ui-express')
const yamljs = require('yamljs')
const swaggerDocument = yamljs.load('./docs/swagger.yaml')
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser")
const bcrypt = require('bcrypt');
// Importing modules
const express = require("express");
require('dotenv').config();
const SECRET = process.env.SECRET
const User = mongoose.model("User")
const loginController = require("../controllers/loginController")
mongoose.Promise = global.Promise
const { requireAuth, checkUser } = require('../middleware/auth.Middleware');


app.use(express.static('public'));
app.use(express.static('files'))
const path = require('path');
const { log } = require('console');

exports.mainPage = (req, res) => {
  const token = req.cookies.jwt;
  console.log("tere mainpage "+token);
  res.render('index');
};




exports.logout_get=(req,res)=>{
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};



