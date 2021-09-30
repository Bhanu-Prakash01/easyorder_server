const mongoose=require('mongoose');

const PlayersSchema=new mongoose.Schema({
    name:{
        type:String
    },
    money:{
        type:Number,
        default:0
    },
    password:{
        type:String
    },
    matchPlayed:{
        type:Number,
        default:0
    },
    totalkills:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports =mongoose.model("Players",PlayersSchema)


