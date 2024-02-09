const express=require("express")
const router=express.Router()

const blogmodels=require("../models/blogmodels")


router.post("/signup",async(req,res)=>{
    let data=req.body
    let blog =new blogmodels(data)
    let result=await blog.save()
    res.json({
        status:"success"
    })
})
module.exports=router