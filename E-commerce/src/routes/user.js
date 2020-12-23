const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/author')
const router = new express.Router()

router.post('/register',async (req,res)=>{
    const data =new User(req.body)
    console.log(data)

    try{
        await data.save()
        const token = await data.generateToken()
        res.status(200).send({
            status:1,
            data:data,
            msg:'user register succ',
            token:token
        })
    }
    catch(e){
        res.status(500).send({
            status:0,
            data:e,
            msg:'error in data',
            token:""
        })
    }
})


module.exports = router