const express = require('express')

const app = express()
const PORT = 5000

app.get('/',(req , res)=>{
    res.json({
        status : true,
        message : "welcome to the website"
    })
})

app.get('/users', (req , res)=>{
    res.status(200).json({
        status : true,
        message : "User Details",
        data :[
            {name : "Syed Shahzad"},
            {name : "Syed Waqas"}
        ]
    })
})

app.post('/users', (req , res) =>{
    res.json({
        status :true,
        message : "User Added Successfully..!"
    })
})

app.put('/users', (req , res)=>{
    res.json({
        status : true,
        message : "User Updated Successfully"
    })
})

app.patch('/users', (req , res) =>{
    res.json({
        status: true,
        message : "User name updated successfuly"
    })
})

app.delete('/users', (req, res)=>{
    res.json({
        status : true,
        message : "user deleted successfully"
    })
})

app.listen(PORT, ()=>{
    console.log("Application is runnning on port",`${PORT}`)
})