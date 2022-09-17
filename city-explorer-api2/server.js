require('dotenv').config();
const express = require('express');
const cors =require('cors');
const server=express();

const PORT=process.env.PORT || 3004;

server.use(cors());
const weatherHandler=require("./weatherHandler");
const movieHandler=require("./movieHandler");
const nearby=require("./Nearby");




//http://localhost:3003
server.get('/',(req,res)=>{
    res.send("Hello from the home route");
})
//http://localhost:3003/test
server.get('/test',(req,res) => {
    console.log("test route");
    res.send('Hi from the test roure');
})

//http://localhost:3003/weather?lon=144.980984&lat=-37.8704051
server.get('/weather',weatherHandler);

server.get('/movie', movieHandler);

//http://localhost:3003/restaurant?lat=-37.870983&lon=144.980714
server.get('/Nearby', nearby);




server.get('*',(req,res)=>{
    res.send("404");
})



server.listen(PORT,()=>{
    console.log(`hello on ${PORT}`)
}
)