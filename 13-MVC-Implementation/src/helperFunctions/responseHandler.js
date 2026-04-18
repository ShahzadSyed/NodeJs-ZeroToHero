const { model } = require("mongoose")

const successResponse = (statusCode , status , message , data ,res) =>{
    res.status(statusCode).json({
        status : status,
        message : message,
        data :data,
    })
}

const errorResponse = (statusCode , status , message ,res) =>{
    res.status(statusCode).json({
        status : status,
        message : message,
        
    })
}

module.exports = {successResponse, errorResponse}