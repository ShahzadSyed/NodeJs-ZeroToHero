const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()
app.use(express.json())
let products = []

app.get('/',(req , res)=>{
    
    res.send("welcome to the website")
})

app.get('/product', (req , res) =>{
     res.json({
        status : true,
        message : "Available Product listed..!",
        data : products
    })
})

app.get('/product/:name', (req,res) =>{
    const {name} = req.params
    res.json({
        status : true,
        message : "required product is listed..!",
        data : products.filter((product) => product.name == name )
    })
})

app.post('/product', (req,res) =>{
    const data = req.body
    products.push(data)

    res.json({
        status: true,
        message :"prodcut added successfully"
    })
})

app.put('/product/:name', (req, res) =>{
    const {name} = req.params
    products = products.map((product) =>{
        if(product.name == name)
        {
            product = req.body
            return product
        }
        return product
    })
    res.json({
        status : true,
        message : "product updated successfully.."
    })

})

app.delete('/product/:name' ,(req,res) =>{
    const {name} = req.params
    products = products.filter((product)=>{
        return product.name != name
    })
    res.json({
        status : true,
        message :"data deleted.."
    })
})


app.listen(process.env.PORT, ()=>{
    console.log("server is running on PORT", `${process.env.PORT}`)
})