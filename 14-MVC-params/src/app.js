const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.get('/health', (req ,res) => {
    res.json({
        status : true,
        message : "Backend is working Now!"
    })
})


app.listen(process.env.PORT, ()=> {
    console.log("Server is running on  PORT", process.env.PORT);
    
})