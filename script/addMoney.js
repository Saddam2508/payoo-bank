document.getElementById("add-btn").addEventListener("click", function () {
  const bankAccount = getValue("select-bank");

  if (bankAccount === "Select back") {
    alert("select a bank");
    return;
  }

  const bankAccountNum = getValue("bank-account");
  if (bankAccountNum.length !== 11) {
    alert("Invalid Account Number");
  }

  const addMoney = getValue("add-amount");

  const balance = getBalance();

  const newBalance = balance + Number(addMoney);

  const pin = getValue("add-pin");

  if (pin === "1234") {
    setBalance(newBalance);
    alert("add money success");
  } else {
    alert("Invalid pin");
  }
});
