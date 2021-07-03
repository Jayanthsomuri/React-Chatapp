const express = require("express")
const app = express()
//another way of declaring the above express module
//const app = require("express")()
//import { createServer } from "http";
//import { Server } from "socket.io";
//another way of importing server
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors: {
        origin: "*",
       
      },
})

io.on("connection",(socket)=>{
 console.log("what is socket",socket);
 console.log("Socket is active to be connected");
 socket.on("chat",(payload)=>{
     console.log("What is payload",payload);
     io.emit("chat",payload)
 })
})


//server call
server.listen(5000,()=>{
console.log("server is listening at port 5000...");
})