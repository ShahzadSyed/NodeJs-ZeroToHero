const response = require('../helperFunctions/responseHandler');
const users = require('../Models/UserSchema');

const signupController = async (req ,res) =>{

    const {email , password , userName } = req.body
    console.log(email , password , userName , "==>details")

    if(!email || !password || !userName)
    {
        return response.errorResponse(400 , false, "All Fields are Required", res)
    }
    if(password.length < 3)
           return response.errorResponse(400 , false, "Password Should be minimum 3", res)
    if(password.length > 8)
           return response.errorResponse(400 , false, "Password Should be Maximum 8 Characters Long..", res)

    try {
      await  users.create({
            email : email,
            password : password,
            userName : userName
        })
       return response.successResponse(200 , true , "user Sign up Successfully",[] ,res)
    } catch (error) {
        return response.errorResponse(400, false , error.message, res)
    }
    
}

module.exports = signupController