const express=require('express');
const server=express();
const mongoose=require('mongoose')
const helmet=require('helmet')
require('dotenv').config();

//importing files
//tournaments
const all_tournaments=require('./routes/tournaments/tournaments')
const players=require('./routes/tournaments/players')


//middlewares
server.use(express.json())
server.use(helmet());


mongoose.connect("mongodb://localhost:27017")
    .then(()=>{
        console.log("database is connected")
    })
    .catch((e)=>{
        console.log(`${e}`)
    })

server.get('/',(req,res)=>{
    res.send("server is running")
})



//main routes

//------->Tournament routes

server.use('/tournament',all_tournaments)
server.use('/players',players)

server.listen(process.env.PORT || 8000,()=>{
    console.log('server is running')
})
