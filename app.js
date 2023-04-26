require("dotenv").config();
const express= require("express");
const app= express();
const multer= require("multer");
const bodyParser = require("body-parser");
//const imageUpload = require('./imageUpload');
const userRouter = require("./api/user/user.router");

app.set("view engine", "ejs");

app.use(express.json());

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(multer().any());
app.get("/", (req,res)=>{
    res.json({
        hello: "world"
    });
});
app.use("/api/users", userRouter);


app.get("/", function(req,res){
    res.render("index");
});

app.get("/login/postjob", function(req,res){
    res.render("postjob");
});

app.get("/login", function(req,res){
    res.render("login");
});






app.listen(process.env.app_port,'0.0.0.0', function(){
    console.log("sab shi chal rha hai");
});
