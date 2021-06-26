//creating express app
const exp=require('express')
const app=exp();
const path = require("path")
require('dotenv').config()

//connect front end backend
app.use(exp.static(path.join(__dirname, './build/')))

//import apis
const userApi=require("./APIS/user-api")
const ProductApi=require("./APIS/product-api")
const adminApi=require("./APIS/admin-api")

//evaluate path to execute specific api
app.use("/user",userApi)
app.use("/product", ProductApi)
app.use("/admin",adminApi)

//const productApi=require("./APIS/product-api")
app.get('/*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
        if (err) {
              res.status(500).send(err)
        }
    })
})



//get mongo client
const mc=require("mongodb").MongoClient;

//database url
const databaseUrl= process.env.database_url;


//connect to db
mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{

    
    if(err){
        console.log("Error in the db connection",err)
    }
    else{
        //get database object
        databaseObj = client.db("backend")

        //create collection Obj
        let userCollectionObj=databaseObj.collection("userCollection")
        let adminCollectionObj=databaseObj.collection("adminCollection")
        let productCollectionObj=databaseObj.collection("ProductCollection")
        let userCartCollectionObj=databaseObj.collection("userCartCollection")

        //sharing collection objects to APIS
        app.set("userCollectionObj",userCollectionObj)
        app.set("adminCollectionObj",adminCollectionObj)
        app.set("productCollectionObj",productCollectionObj)
        app.set("userCartCollectionObj" , userCartCollectionObj)

        console.log("Database connected")
    }
})




//handling unavailble paths
app.use((req,res,next)=>{
    res.send({message:`path ${req.url} is not matched`})
})

//error handling middleware(for syntax errors)
app.use((err,req,res,next)=>{
    res.send({message:err.message})
})


//app.use("/products",productApi)

//assign port
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`server running on port ${PORT} `))