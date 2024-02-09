const express=require("express")
const router=express.Router()

const blogmodels=require("../models/blogmodels")
const bcrypt=require("bcryptjs")


hashPasswordGenerator=async(pass)=>{
const salt=await  bcrypt.genSalt(10)
return bcrypt.hash(pass,salt)
}
router.post("/signup",async(req,res)=>{


    let {data}={"data":req,body}
    let password =password.data
    hashPasswordGenerator(password).then(
        (hashedpassword)=>{
            console.log(hashedpassword)
            data.password=hashedpassword
            console.log(data)
            let user=new userModel(data)
            let result=user.save()
            res.json({
                status:"success"
            })
        }
    )
   
    
})
module.exports=router