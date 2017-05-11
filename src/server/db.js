var express    = require("express");
var mysql = require('mysql');
var app = express();


// establish database connection
var connection = mysql.createConnection({
  port     : 3306,
  host     : 'localhost',
  user     : 'root',
  password : 'password'
});


// handle database connection errors
connection.connect(function(err){
  if(!err) {
      console.log("SERVER-DATABASE connected ...");
  } else {
      console.log(err);
  }
});

module.exports.connection = connection;
