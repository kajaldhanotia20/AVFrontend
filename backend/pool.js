const mysql = require("mysql");
const mongoose = require("mongoose");

/*
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: "3306",
  database: "project_AV",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;

*/

//connecting to rds
const pool = mysql.createConnection({
  host: 'database-1.ct1zdvdxetuv.us-east-1.rds.amazonaws.com',
  user: 'admin',
  port: 3306,
  password: 'adminuser',
  database: 'group4'
});

pool.connect((err) => {
  if(err){
   console.log("failed to connect"+err);
  }
  if(!err){
      console.log("connected to mysql database");
  }
});

module.exports=pool;


//connecting to MONGO

mongoose
  .connect("mongodb+srv://dbuser:dbuser@281avcloud.cspsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" , {
    // retry to connect 
    reconnectTries: 1,
    // wait 5 seconds before retryMon
    reconnectInterval: 5000,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDatabase"))
  .catch((err) => console.log("Failed to connect to Database"+err));



