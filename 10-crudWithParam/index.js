const express = require('express')
const app = express()

const PORT= 3000

app.use(express.json())
let users = []

app.get('/',(req , res)=>{
    res.json({
        status : true,
        message : "Welcome.."
        
    })
})

app.get('/users',(req , res)=>{
    console.log(users)
    res.json({
        status : true,
        message : "All users Data",
        data : users
    })
})

app.get('/users/:username',(req , res)=>{

    const {username} = req.params
    console.log(username)
    res.json({
        status : true,
        message : "Required users Data",
        data : users.filter((user) => user.username == username )
    })
})

app.post('/users', (req , res) =>{
    const data = req.body
    users.push(data)

    res.json({
        status:true,
        message : "Data Added!"        
    })
})


app.put('/users/:username', (req , res)=>{

    const {username} = req.params    
    users = users.map((user) =>{
        if(user.username == username)
        {
            user = req.body
           
            return user
        }
        return user
    })

    res.json({
        status : true,
        message : "required user updated.."
    })
})

app.delete('/users/:username' ,(req , res) =>{
    
    const {username} = req.params
    users = users.filter((user) =>{
        return user.username != username
    })
    res.json({
        status : true,
        message :"user deleted..."
    })

})

app.listen(PORT, ()=>[
    console.log("server is running on PORT" ,`${PORT}`)
])