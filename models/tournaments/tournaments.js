const mongoose=require('mongoose');

// const players_registered= new mongoose.Schema({
//     playername:{
//         type:String
//     }
// })

const TournamentsSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    game:{
        type:Number
    },
    entry_fee:{
        type:Number
    },
    per_kill:{
        type:String
    },
    map:{
        type:String
    },
    mode:{
        type:String
    },
    players:{
        type:Array
    },
    
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports =mongoose.model("Tournaments",TournamentsSchema)


