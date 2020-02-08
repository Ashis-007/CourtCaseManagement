function getInfo() {
  let fName = document.getElementById("firstName").value;
  let lName = document.getElementById("lastName").value;

  if (validateInfo(fName, lName, number)) {
    //add to database
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
