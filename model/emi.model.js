const express = require('express')
const mongoose=require('mongoose')
const emiSchema=new mongoose.Schema({
    // userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    amount:{type:Number, required:true},
    rate:{type:Number, required:true},
    tenure:{type:Number, required:true}
})
const emi=mongoose.model("emi",emiSchema)
module.exports=emi
