const http = require('http')
const url = require('url')

const server = http.createServer((req , res)=>{
    console.log(req.url , "server running")
    // res.end("server started running")

    //handling routes by using url
    if(req.url == '/home')
    {
        res.end('New Home pageeee')
    }
    else if (req.url == '/test')
    {
        res.end('Test page')
    }
    else{
        res.end('wrong request!')
    }
})

server.listen(5000, '127.0.0.1',(req, res)=>{
    console.log("server hits");
})