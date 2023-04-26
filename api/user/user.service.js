//improrts the mysql database
const pool= require("../../config/database");
//to upload images
const multer= require("multer");
const path= require("path");
const fs= require("fs");
const { log } = require("console");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './Images')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
});
  
const upload = multer({ storage: storage });


//exports create function
module.exports= {
    create: (req, data, callback) =>{
      console.log("user:", req.user);
       /* upload.single('image')(req, null, (err) => {
            if (err) {
              return callback(err);
            }
      
            const imageBuffer = fs.readFileSync(req.file.path);
            const imageBinary = imageBuffer.toString('binary');  */
      
        // Read the image file into a buffer
        //const imageBuffer = fs.readFileSync(image.path);
      
        
        // code to insert user data into database
        pool.query(
            `insert into user_account(user_type_id,email,password,gender,contact)  
                    values(?,?,?,?,?)`,
            [
                data.user_type_id,
                data.email,
                data.password,
                data.gender,
                data.contact
            ],
            //callback function to handle response and error of mysql query`
            (error, results, fields) => {
                if(error) {
                  callback(error);  
                } else {
                  /*fs.unlink(req.file.path, (err) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    console.log("File has been deleted");
                    }); */
                    callback(null, results);
                }
              }
            );
       /* }); */
    },
    /*getUserByUserEmail: (email, callBack) => {
        // code to get user data from database
        pool.query(
          `select * from user_account where email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    }, */
    getUserByUserEmail: (email, callBack) => {
      console.log(email);
      pool.query(
          `SELECT * FROM user_account WHERE email = ?`,
          [email],
          (error, results) => {
              //console.log("results", results);
              if (error) {
                  return callBack(error);
              } else if (results.length === 0) {
                  return callBack("User not found");
              } else {
                  //console.log(results[0]);
                  return callBack(null, results);
              }
          }
      );
  },
  
  
    postJobs: (req, data, callback) => {

              pool.query(
                `INSERT INTO job_post( position, company, created_date, job_description, status)
                 VALUES (?, ?, ?, ?, ?)`,
                [
                  
                  data.position,
                  data.company_name,
                  data.created_date,
                  data.job_description,
                  data.status
                ],
                (error, results, fields) => {
                  if (error) {
                    callback(error);  
                  } else {
                    console.log("ans-", results);
                    callback(null, results);
                  }
                }
              );
             
          
        }   
};
     
      
      