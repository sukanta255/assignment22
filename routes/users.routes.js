const express = require("express");
const fs = require("fs");

const userRouter=express.Router()

//Handel GET Request to "/api/users" and getting the data from database.json file
userRouter.get("/users",(req,res)=>{
    try{
        const data = JSON.parse(fs.readFileSync("./database.json","utf-8"))
        res.send(data.users);
    }catch(err){
        console.log(err);
    }
})

//Handel POST Request to "/api/users" and save user information to database.json file
userRouter.post("/users",(req,res)=>{
    try{
        const data = JSON.parse(fs.readFileSync("./database.json","utf-8"))
        data.users.push(req.body);
        fs.writeFileSync("./database.json",JSON.stringify(data))
        res.status(201).json({message: "User information added succesfully" })
    }catch(err){
        console.log(err)
        res.status(500).send({message: "Internal Server Error", err});
    }
})

// export userRouter
module.exports={
    userRouter
}