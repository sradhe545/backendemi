const express = require('express')
const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{type:String,min:4, required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,min:6,required:true}
},{timestamps:true})
const user=mongoose.model("user",userSchema)
module.exports=user