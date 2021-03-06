const mongoose=require('mongoose');


const TournamentsSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    time:{
        type: String
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
    },
    over:{
        type: Boolean,
        default: false
    }
})

module.exports =mongoose.model("Tournaments",TournamentsSchema)


