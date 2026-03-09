document
  .getElementById("adoptForm")
  .addEventListener("submit", function (event) {

    let name = document.getElementById("fullname").value;
    let phone = document.getElementById("phone").value;
    let pets = Number(document.getElementById("pets").value);
    let agree = document.getElementById("agree").checked;

    // name + phone ห้ามว่าง
    if (name === "" || phone === "") {
      alert("Full name and phone number cannot be empty");
      event.preventDefault();
      return;
    }

    // pets ต้อง 0-100
    if (pets === "" || pets < 0 || pets > 100) {
      alert("Number of pets must be between 0 and 100");
      event.preventDefault();
      return;
    }

    // checkbox ต้องติ๊ก
    if (!agree) {
      alert("You must accept the agreement");
      event.preventDefault();
      return;
    }

  });