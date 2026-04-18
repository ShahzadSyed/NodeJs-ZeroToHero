const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./helperFunctions/db');
const authRouter = require('./Routes/authRoutes');

dotenv.config()
const app = express();
app.use(express.json())

connectDB() //conneting database

console.log(process.env.PORT);

//Authentication Routes
//Signup
//Login
app.use('/api/auth', authRouter)

//userRoutes
//updateUser
//getUser
//deleteUser
//app.use('/api/users', usersRoute)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})