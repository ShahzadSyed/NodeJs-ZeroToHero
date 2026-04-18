const express = require('express')
const mongoose = require('mongoose');
const Users = require('./models/userSchema');

dotenv.config()
const app = express()



//DB Connection standard..
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB Connecteedd..!")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/health' , (req,res) =>{
    res.send({
        status : true,
        message : "Api is working"
    })
})

app.post('/users', async (req,res)=>{

    const MyUser ={
        name :"Syed Waqas",
        profession : "Softare Developer"
    }

    try {
        
        const small = await Users.create(MyUser)
        res.send({
            status: true,
            message : "user added.."
        })

    } catch (error) {
        console.log(error , "errors")
    }


})




app.listen(process.env.PORT ,(req , res)=>{
    console.log("server is running on PORT" + process.env.PORT)
})