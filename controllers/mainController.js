require ('dotenv').config();
const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET
const bodyParser = require('body-parser');

const { request } = require('express');
const app = express();




exports.getIndexPage = (req, res) => {
  res.render('index');

};

exports.getItemsPage = (req, res) => {
  res.render('items');
};

exports.getPostPage = (req, res) => {
  res.render('post');
};
