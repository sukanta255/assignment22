const express = require("express");
const fs = require("fs");

const userRouter=express.Router()

//Handel GET Request to "/api/users" and getting the data from database.json file
userRouter.get("/users",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./database.json","utf-8"))
    res.send(data.users);
})

//Handel POST Request to "/api/users" and save user information to database.json file
userRouter.post("/users",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./database.json","utf-8"))
    data.users.push(req.body);
    fs.writeFileSync("./database.json",JSON.stringify(data))
    res.status(201).json({message: "User information added succesfully" })
})

// export userRouter
module.exports={
    userRouter
}