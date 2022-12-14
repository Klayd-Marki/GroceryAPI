require('dotenv').config();
const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET
const bodyParser = require('body-parser');
const User = require("../Models/userModel");
const { request } = require('express');
const app = express();



exports.getSignUpPage = (req, res) => {
    res.render('signup');
};

exports.postSignUp = async (req, res, next) => {
    console.log("Register body: ", req.body);
    const { name, email, password } = req.body;
    const newUser = User({
        name,
        email,
        password,

    });

    let user = await User.findOne({ email });

    if (user) {
        res.status(400).json('user exists already');
        console.log('this email is already in use  ');
    }

    try {
        await newUser.save();
    } catch (err) {
        res.status(401).json(next(err))


    }
    let token;

    try {
        token = jwt.sign(
            { userId: newUser.id, email: newUser.email },
            JWT_SECRET,
            { expiresIn: "1h" }
        );
    } catch (err) {
        console.log(JWT_SECRET);
        const error = new Error("Error! Something went wrong.");
        return next(error);
    }

    res.redirect('/login')

}