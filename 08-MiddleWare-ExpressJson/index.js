const express = require('express')

const app = express()

app.use(express.json()) //this is the middleware 
const PORT = 3000

app.post('/', (req , res)=>{
    console.log(req.body)
    res.json({
        status : true,
        message :"Recevied your data successfully.."
    })
 
})


app.listen(PORT, ()=>{
    console.log("server is running on PORT", `${PORT}`)
})