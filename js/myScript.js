function getInfo() {
  let fName = document.getElementById("firstName").value;
  let lName = document.getElementById("lastName").value;

  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;

  let userName = document.getElementById("userName").value;
  let password = document.getElementById("password").value;

  if (validateInfo(fName, lName, number)) {
    //add to database
    addToDatabase(fName, lName, email, number, city, state, userName, password);
    console.log("Successfully added to database");
  } else {
    //display a message on screen
    console.log("Invalid credentials");
  }
}

function validateInfo(fName, lName, number) {
  if (
    fName.length == 0 ||
    lName.length == 0 ||
    number.length > 10 ||
    number.length < 10
  ) {
    return false;
  } else return true;
}

function addToDatabase(
  fName,
  lName,
  Email,
  phnNumber,
  City,
  State,
  UserName,
  Password
) {
  let mysql = require("mysql");

  let con = mysql.createConnection({
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

  let user = {
    username: UserName,
    password: Password,
    email: Email,
    city: City,
    state: State,
    number: phnNumber,
    firstname: fName,
    lastname: lName
  };

  con.query("INSERT INTO users SET ?", user, (err, res) => {
    if (err) throw err;

    //console.log("Last insert ID:", res.insertId);
  });
}

getInfo();
