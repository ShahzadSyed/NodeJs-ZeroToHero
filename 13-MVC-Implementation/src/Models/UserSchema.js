const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        required : true,
        unique : true,
        type : String
    },
    password:{
        required : true,      
        type : String,
        minlength : 3,
        maxlength:5
    },
    userName :{
        required : true,
        unique : true,
        type : String
    }

})

const users = mongoose.model('users', userSchema)
module.exports = users