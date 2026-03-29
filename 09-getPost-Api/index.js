const express = require('express')
const app = express()

app.use(express.json())

const PORT = 3000
const users = []

app.get('/users', (req , res)=>{
    res.json({
        status : true,
        message : "Data Received Successfully",
        data : users
    })
})

app.post('/users',(req , res)=>{
    const data = req.body
    users.push(data)
    res.json({
        status : true,
        message : "user added successfully"
    })

})

app.listen(PORT,()=>{
    console.log("server is Running on PORT" ,`${PORT}`)
})