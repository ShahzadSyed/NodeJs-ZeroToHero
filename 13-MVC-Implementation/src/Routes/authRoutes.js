const express = require('express');
const response = require('../helperFunctions/responseHandler');
const { model } = require('mongoose');
const users = require('../Models/UserSchema');
const signupController = require('../controllers/authController');

const authRouter = express.Router()

authRouter.post('/signup', signupController)

authRouter.post('/login', (req ,res) =>{
    return response.successResponse(200 , true , "user Sign up Successfully",[] ,res)
})

module.exports = authRouter