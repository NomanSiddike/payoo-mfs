document
  .getElementById("btn-main-cashout")
  .addEventListener("click", function () {
    document.getElementById("form-add-money").classList.add("hidden");
    document.getElementById("form-cash-out").classList.remove("hidden");
    document.getElementById("transaction-section").classList.add("hidden");
  });

document
  .getElementById("btn-main-cashin")
  .addEventListener("click", function () {
    document.getElementById("form-add-money").classList.remove("hidden");
    document.getElementById("form-cash-out").classList.add("hidden");
    document.getElementById("transaction-section").classList.add("hidden");
  });

document
  .getElementById("btn-main-transaction")
  .addEventListener("click", function () {
    document.getElementById("form-add-money").classList.add("hidden");
    document.getElementById("form-cash-out").classList.add("hidden");
    document.getElementById("transaction-section").classList.remove("hidden");
  });
