// require ('dotenv').config({path: './enc'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})


connectDB()

.then(()=> {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`sever is running on port :  ${process.env.PORT}`)
    })
    app.on("error", (error)=>{
      console.log("ERROR", error)
      throw error 
    })
})
.catch((err) =>{
    console.log("MONGODB CONNECTION ERROR AT INDEX.js", err);
    
})










/*
import express from "express";

const app = express()


//iife 
( async ()=> {
    try {
    await mongoose.connect(`${process.env.MONGODB_URl}/${DB_NAME}`)
    app.on("error", (error)=> {
        console.log("ERROR", error);
        throw error
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listning on port ${process.env.PORT}`);
    })
} catch (error) {
      console.error("ERROR: ", error)
      throw error        
    }
})()
*/