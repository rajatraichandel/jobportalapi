const {create, getUserByUserEmail, postJobs}= require("./user.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
//const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');



module.exports= {
    createUser: (req,res)=>{
      //console.log(req.body.contact_number)

        //const body= req.body;
      /* if (!req.body.password) {
          return res.status(400).json({
              success: 0,
              message: "no data entry"
          });
      } */
       //console.log(req.body.password)
        const salt = genSaltSync(10);
        req.body.password = hashSync(req.body.password, salt); 

        
        create(req, req.body, (err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    },
      login: (req, res) => {
          const body = req.body;
          getUserByUserEmail(req.body.email, (err, results) => {
            if (err) {
              console.log(err);
            }
            if (!results) {
              return res.json({
                success: 0,
                data: "Invalid email or password"
              });
            }
            console.log("pass", body.password);
            console.log(results[0].password);
            const result = compareSync(body.password, results[0].password);
            
            
            if (result) {
              results.password = undefined;
              
              const jsontoken = jwt.sign({ result: results }, process.env.jwtSecretkey, {
                expiresIn: "1d"
              });
              // store token in a cookie
              res.cookie('jwtToken', jsontoken, { httpOnly: true });


              return res.json({
                success: 1,
                message: "login successfully",
                token: jsontoken
              });
            } else {
              return res.json({
                success: 0,
                data: "Invalid email or password"
              });
            }
          });
      },
    AddJobs: (req, res) => {
      
              //const userEmail = req.decoded.email;
         
        const data = {
            
            position: req.body.position,
            company_name: req.body.company_name,
            created_date: new Date(),
            job_description: req.body.job_description,
            status: "active"
        };
        //console.log(data);

        postJobs(req, data, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    }
    
}



