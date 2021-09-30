const express=require('express');
const router=express.Router();
const Tournaments=require('../../models/tournaments/tournaments');

router.post('/post', async (req,res)=>{
    const {map,id,per_kill,entry_fee,mode,game}= req.body
    const data= new Tournaments({
        id:id,
        entry_fee:entry_fee,
        per_kill: per_kill,
        map:map,
        mode: mode,
        game:game
    })

    await data.save()
    res.send("data has been saved")

})

router.get('/get', async (req,res)=>{
    const saved_tournaments= await Tournaments.find()
    res.send(saved_tournaments)
})

router.get('/get/:id', async (req,res)=>{
    const saved_tournament= await Tournaments.findById(req.params.id)
    res.send(saved_tournament)
})

router.delete('/delete', async (req,res)=>{
    const delete_tournaments= await Tournaments.deleteMany()
    res.json({delete_count:delete_tournaments.deletedCount,done:true})
})

router.delete('/delete/:id',async (req,res)=>{
    const delete_tournament= await Tournaments.findByIdAndDelete(req.params.id)
    if(delete_tournament){
        res.json({done:true})
    }
    else{
        res.status(400).send("not found ")
    }
})


module.exports=router;