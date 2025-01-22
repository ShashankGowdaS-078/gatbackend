/*const { cache } = require('ejs');
const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const cors = require("cors")
app.use(cors())
const jwt=require('jsonwebtoken')

mongoose.connect("mongodb://localhost:27017/globalDB")
    .then(()=>{console.log("db connected")})
    .catch(()=>{console.log("db not connected")})

    const mySchema = new mongoose.Schema({
        name:String,
        pwd:String
    })

    const user = mongoose.model('user',mySchema);
    
//async awit

    app.post("/",(req,res)=>{
        const username = req.body.username;
        const email = req.body.email;
        const phone_number = req.body.phone_number;
        const details = {
            user:username,
            email:email,
            phone_number:phone_number
        }
        const userDetails = new user(details);
        userDetails.save()
        .then(()=>{res.send("success")})
        .catch(()=>{res.send("something went wrong")})
        })

        app.delete("/delete",(req,res)=>{
            const username=req.body.username;
            user.deleteOne({user:username})
            .then(()=>{res.send("deleted successfully")})
            .catch(()=>{res.send("something went wrong")})
        })
        
        app.get("/fetch",(req,res)=>{
            const username = req.body.username;
            user.findOne({user:username})
            .then((response)=>{
                console.log(response);
                if(response){
                    res.send("User fetched successfully");
                }else{
                    res.send("nothing there");
                }
                })
                .catch(()=>{res.send("Error is fetched data")})
            })
        
            app.get("/bck",(req,res)=>{
                res.send("hello from banckend you have connected get router")
            })

            app.post("/login",(req,res)=>{
                    const name = req.body.name;
                    const pwd = req.body.pwd;
                    const skey="shashu121";
                    const token = jwt.sign(name,skey);
                    const details = {
                        name:name,
                        pwd:token}
                    const userDetails = new user(details)
                    userDetails.save()
                    .then(()=>{res.send("login success")})
                    .catch(()=>{res.send("login failed")})
            })

    app.listen(3000,()=>{
        console.log("server started");
    })




const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors")
const jwt=require('jsonwebtoken')

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/globalDB")
.then(()=>{console.log("db connected")})
.catch(()=>{console.log("db not connected")})

const mySchema = mongoose.Schema({
    name:String,
    pwd:String
})
const user = mongoose.model('user',mySchema);

app.post("/",(req,res)=>{
    const name = req.body.name;
    const pwd = req.body.pwd;
    const skey="shashu121";
    const token = jwt.sign(name,skey)
    const details = {
        name:name,
        pwd:token
    }
    const userDetails = new user(details)
    userDetails.save()
    .then(()=>{res.send("success")})
    .catch(()=>{res.send("wrong")})
})

app.listen(3000,()=>{
    console.log("server started");
})
*/










const express = require("express");
const secret = "123";
const jwt = require("jsonwebtoken");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// mongoose.connect("mongodb://localhost:27017/userDetails")
//     .then(() => {
//         console.log("Mongo Connected");
//     })
//     .catch(() => {
//         console.log("Mongo Not Connected");
//     });

// const mySchema = mongoose.Schema({
//     user:{
//         type:String,
//         required:true
//     },
//     password: {
//         type: String,
//         required:true
//     }
// });

// const user = mongoose.model("user", mySchema);

app.get("/", (req, res) => {
    res.send("Servre running");

});
app.get("/global", (req, res) => {
    res.send("global ge bal");

});
app.post("/signin", (req, res) => {
    // const username = req.body.username;
    // const pwd = req.body.pwd;
    const {username, password} = req.body.user;
    const details = {
        user: username,
        password: password
    };
    // const userDetails = new user(details);
    // userDetails.save()
    // .then((response) => {
    res.send("Successfully Signed In");
    // })
    // .catch(()=>{
        // res.send("Failed to sign in");
    // })
});

app.post("/login", (req, res) => {
    const {username, password} = req.body.user;

    res.send("MongoDB Not Connected");


    // user.findOne({ user: username })
    // .then((response)=>{
    //     if(response.user === username)
    //     {
    //         if(response.password === password)
    //         {
    //             res.send({ success: true });
    //         }
    //         else{
    //             res.send({ success: false });
    //         }
    //     }
    // })
    // .catch(()=>{
    //     res.send("User Not Found or the username is invalid");
    // })
    // .catch((err)=>{
    //     res.send(err);
    // })
});

app.listen(3000, () => {
    console.log("Server 3000 is running");
});
