const jwt = require("jsonwebtoken");
//const { getUserByUserEmail } = require("../api/user/user.service");


/* module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      jwt.verify(token, process.env.jwtSecretkey, async (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token...",
          });
        } 
        else {
          req.decoded = decoded;
          next();
        }
        /*else {
          req.decoded = decoded;
          next();
          //const userEmail = req.decoded.email;
          const userEmail = decoded.result.email;
          console.log(userEmail);
          getUserByUserEmail(userEmail, (err, user) => {
            if (err) {
              return res.json({
                success: 0,
                message: "Database connection error",
              });
            } else if (!user) {
              return res.json({
                success: 0,
                message: "Invalid Token... User not found",
              });
            } else {
              req.user = user;
              console.log( req.user);
              return res.json({
                success: 0,
                message: "no response",
              });
              
              
            }
          }
          );
        }*/
     /*});
    } 
    else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User",
      });
    }
  },
};*/


















/*const jwt = require("jsonwebtoken");
const { getUserByUserEmail } = require("../api/user/user.service");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.jwtSecretkey, async (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          // get user details using email from decoded token
          const email = decoded.result.email;
          const user = await getUserByUserEmail(email, (err, result) => {
            if (err) {
              return res.json({
                success: 0,
                message: "Database connection error"
              });
            } else if (!result) {
              return res.json({
                success: 0,
                message: "Invalid Token... User not found"
              });
            } else {
              req.user = result;
              console.log("rs", req.user);
              next();
            }
          });
          // call next() outside of the callback function
          console.log(req.user);
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
}; */
 









/* const jwt = require("jsonwebtoken");
const { getUserByUserEmail } = require("../api/user/user.service");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.jwtSecretkey, async (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          // get user details using email from decoded token
          const email = decoded.result.email;
          const user = await getUserByUserEmail(email, (err, result) => {
            if (err) {
              return res.json({
                success: 0,
                message: "Database connection error"
              });
            } else {
              req.user = result;
              next();
            }
          });
          console.log("r1",user);
          if (!req.user) {
            return res.json({
              success: 0,
              message: "Invalid Token... User not found"
            });
          }
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
}; */












module.exports = {
  checkToken: (req, res, next) => {
    console.log("invaid", req.user);
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.jwtSecretkey, (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          req.decoded = decoded;
          console.log("hello");
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
}; 