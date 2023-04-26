const{ createUser,login,AddJobs }= require("./user.controller");
const router= require("express").Router();
const{checkToken}= require("../../auth/tokenValidation");


router.post("/",createUser);
router.post("/login",login);
router.post("/login/postjob",checkToken, AddJobs);

module.exports= router;



