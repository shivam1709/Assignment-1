if (sessionStorage.getItem("loggedIn") == 1) {
  sessionStorage.setItem("user", "User123");
  document.getElementById("user").innerHTML = sessionStorage.getItem("user");
} else {
  window.location.replace("login.html");
}
function moneyValidation() {
  //var a = document.getElementById("amount").value;
  if (document.getElementById("amount").value < 5000) {
    alert("Money sent");
    return true;
  } else {
    alert("Not enough money");
    return false;
  }
}
//document.getElementById('textbox_id').value
