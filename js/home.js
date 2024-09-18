// console.log("addd");
document
  .getElementById("button-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAddAmount = Number(
      document.getElementById("input-amount").value
    );
    const inputPin = document.getElementById("input-pin").value;

    if (inputPin === "1234") {
      const cardBalance = Number(
        document.getElementById("card-balance").innerText
      );
      let newBalance = Number(cardBalance + inputAddAmount);

      document.getElementById("card-balance").innerText = newBalance;
    } else {
      alert("Wrong Information");
    }
  });
