// console.log("Hello WORLD");
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    // console.log(phoneNumber);
    const pin = document.getElementById("user-pin").value;
  });
