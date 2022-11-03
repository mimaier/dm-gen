var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fstehtfürfreunde"
});

con.connect(function(err : any) {
  if (err) throw err;
  console.log("Connected!");
});