const express = require("express");
const app = require('express')()
const jwt = require('jsonwebtoken');
require ('dotenv').config();
const SECRET = process.env.SECRET
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');
const router = express.Router();
mongoose.Promise = global.Promise
const User = require("../models/userModel");



const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }


  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {

      errors[properties.path] = properties.message;
    });
  }

  return errors;
}
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, SECRET, {
    expiresIn: maxAge
  });
};
exports.loginInfo = async (req, res, next) => {
 
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
   res.redirect("ticketsadd")
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }


}

exports.loginPage=(req, res) => {
  res.render('login');
}