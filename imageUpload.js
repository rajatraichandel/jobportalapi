/*
const express= require("express");
const path= require("path");

const image= express();

const multer= require("multer");
const { log } = require("console");
const storage= multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,"Images")
    },
    filename: (req,file,cb) =>{
        cb(null, Date.now() + path.extname(file.originalname))
    }

});

const upload= multer({storage: storage})

*/




