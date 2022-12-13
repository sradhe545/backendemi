const express = require('express')
const User=require("../model/user.model")
const app=express.Router()


app.get("/",async(req,res)=>{
    try{
       
        let user=await User.find({})
        res.status(200).send(user)
    }catch(err){
        res.status(500).send(err.message)
    }
})
app.post("/signup",async(req,res)=>{
    try{
        let {password,...other}=req.body
        let user=await User.findOne({email:req.body.email})
        if(user)
        {
            res.status(500).send("User Already Exist")
        }
        let newUser=await User.create(req.body)
        res.status(200).send("User Signup Successfully")
    }catch(err){
        res.status(500).send(err.message)
    }
})

app.post("/login",async(req,res)=>{
    try{
        let {email,password}=req.body
        let user=await User.findOne({email,password})
        if(!user)
        {
            res.status(500).send("Wrong Credentials")
        }
        res.status(200).send({token:`${user.id}:${user.email}:${user.password}`,time:new Date()})
    }catch(err){
        res.status(500).send(err.message)
    }
})





module.exports=app