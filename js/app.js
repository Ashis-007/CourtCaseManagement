var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "dbuser",
  database: "ccm"
});

console.log("Con created");

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
