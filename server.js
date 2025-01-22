const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/",(req,res)=>{
    res.json({success:true})
})
app.listen(3000,()=>{
    console.log("Server started");
})