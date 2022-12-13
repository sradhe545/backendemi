const express = require('express')
const User=require("../model/user.model")
const app=express.Router()

app.post("/",async(req,res)=>{
    try{
       let {amount,rate,tenure} = req.body
       let r=rate/(1200)
       let emi=(amount*r*(1+r)*tenure)/((1+r)*tenure-1)
       res.status(200).send({emivalue:(12*emi),totalAmt:(12*emi)+amount,interestpayable:emi})
    }catch(err){
        res.status(500).send(err.message)
    }
})


module.exports=app