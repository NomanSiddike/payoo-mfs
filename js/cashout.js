document
  .getElementById("button-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashoutAmount = Number(
      document.getElementById("cashout-amount").value
    );
    const cashoutPin = document.getElementById("cashout-pin").value;
    // console.log(cashoutPin);

    if (cashoutPin === "1234") {
      console.log("cashout possible");
      const accoutCardBalance = Number(
        document.getElementById("card-balance").innerText
      );
      const updateBalance = accoutCardBalance - cashoutAmount;
      document.getElementById("card-balance").innerText = updateBalance;

      const p = document.createElement("p");
      p.innerText = `Cash out: ${cashoutAmount}Tk   New Balance: ${updateBalance}`;
      document.getElementById("transaction-container").append(p);
    } else {
      alert("Failed to Cash Out, Plz Try Again");
    }
  });
