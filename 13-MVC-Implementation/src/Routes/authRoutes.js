const express = require('express');
const successResponse = require('../helperFunctions/responseHandler');
const { model } = require('mongoose');

const authRouter = express.Router()

authRouter.post('/signup', (req ,res) =>{
    return successResponse(200 , true , "user Sign up Successfully",[] ,res)
})

authRouter.post('/login', (req ,res) =>{
    return successResponse(200 , true , "user login Successfully",[] ,res)
})

module.exports = authRouter