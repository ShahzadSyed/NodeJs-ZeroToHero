const http = require('http')  //Es-5 method for importing 

//Creating Server by using http and it takes callback
const server = http.createServer((req , res)=>{
    res.end('respone create by server!')    
});

//now listening server requests1
server.listen(5000, '127.0.0.1',(req , res)=>{
    console.log("server hits by user");
} )