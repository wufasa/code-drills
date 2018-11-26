var userConfirm;

document.onkeyup = function(input) {


var userKey = input.key.toLowerCase();
  console.log(userKey);
  if (userKey === "h") {
    userConfirm = confirm('K button logic.');
  }



  if (userKey === "k") {
    if (userConfirm === true) {
      alert("Hello");
    } else {
      alert("No Thanks");
    }
  }
}
