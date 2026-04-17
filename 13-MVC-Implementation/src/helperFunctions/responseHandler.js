const { model } = require("mongoose")

const successResponse = (statusCode , status , message , data ,res) =>{
    res.status(statusCode).json({
        status : status,
        message : message,
        data :data,
    })
}

module.exports = successResponse