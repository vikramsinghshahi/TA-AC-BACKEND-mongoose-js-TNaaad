var express = require("express");

var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost:27017/sample", (err)=>{
    console.log(err ? err: "connected true");
})


app.get("/", (req, res)=>{
    res.send("welcome")
})

app.listen(3000, ()=>{
    console.log("server is listening at 3k")
})