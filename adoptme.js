document.getElementById("adoptForm").addEventListener("submit", function (event) {

  let name = document.getElementById("fullname").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let petsInput = document.getElementById("pets").value;
  let pets = Number(petsInput);
  let agree = document.getElementById("agree").checked;

  if (name === "" || phone === "") {
    alert("Full name and phone number cannot be empty");
    event.preventDefault();
    return;
  }

  if (petsInput === "" || pets < 0 || pets > 100) {
    alert("Number of pets must be between 0 and 100");
    event.preventDefault();
    return;
  }

  if (!agree) {
    alert("You must accept the agreement");
    event.preventDefault();
    return;
  }

});