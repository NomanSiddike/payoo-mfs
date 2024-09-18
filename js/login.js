// console.log("Hello WORLD");
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    // console.log(phoneNumber);
    const pinNumber = document.getElementById("user-pin").value;

    if (phoneNumber === "1" && pinNumber === "1234") {
      console.log("You are logged in");
      window.location.href = "/home.html";
    } else {
      alert("Wrong number or pin");
    }
  });
