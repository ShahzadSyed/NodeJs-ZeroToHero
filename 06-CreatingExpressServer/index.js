const express = require('express')
const app = express()
const PORT = 3000

app.get('/',(req , res)=>{
    if(true)
    {
        res.send("Welcome To The Website")
    }
    
    
})

app.get('/about', (req , res)=>{
    if(true)
    {
        res.send("About Us")
    }
})

app.post('/details', (req , res) =>{
    res.json({
        status : true,
        message : "Hello Shahzad!",
        email : "test@gmail.com"
    })
})

app.post('/latest', (req , res) =>{
    res.send("welcome")
})

app.listen(PORT, ()=>{
    console.log("Application is runnning on port",`${PORT}`)
})
