const {createPool}= require("mysql");

const pool= createPool({
    port: process.env.db_port,
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.mysql_db,
    connectionLimit: 10
});

module.exports= pool ;

pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database!');
    connection.release();
});
  