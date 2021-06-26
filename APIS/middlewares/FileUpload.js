//import cloudinary based module
const cloudinary=require("cloudinary").v2;
const multer = require("multer")
const {CloudinaryStorage} = require("multer-storage-cloudinary")


//configure cloudinary
cloudinary.config({
    cloud_name:'ddv8600dr',
    api_key:'985143987538697',
    api_secret:'N_wgwAGzvz2_5tRg5i20f5eR-PI'
})


//configure multer-storage-cloudinary
const clStorage=new CloudinaryStorage({
       cloudinary:cloudinary,
       params:async(req,file)=>{
           return{
               folder:"first",
               public_id:file.filename+'-'+Date.now()
           }
       }


})


//configure multer 
const multerObj=multer({storage:clStorage})


module.exports=multerObj