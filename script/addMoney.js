document.getElementById("add-btn").addEventListener("click", function () {
  const bankAccount = getValue("select-bank");

  if (bankAccount === "Select back") {
    alert("select a bank");
    return;
  }
});
