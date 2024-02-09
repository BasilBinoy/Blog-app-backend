const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema(
{
    Name:String,
     Age:String,
     Phone:String,
     Address:String,
     Pincode:String,
     Email:String,
     Password:String,
}

)

module.exports=mongoose.model("blog",blogSchema)