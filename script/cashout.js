document.getElementById("cashout-btn").addEventListener("click", function () {
  //1.get the agent number & validate
  const agentNum = getValue("agent-number");
  if (agentNum.length !== 11) {
    alert("Invalid number");
    return;
  }
  //2.get the amount, validate, convert to Number
  const amount = getValue("cashout-amount");
  const amountConvert = Number(amount);

  //3.get the current balance, validate, convert to Number
  const balance = getBalance("balance");

  //4.calculate new balance
  const newBalance = balance - amountConvert;

  //5.true:: show and alert > set Balance
  if (newBalance < 0) {
    alert("Invalid amount ");
    return;
  }
  //6.get the pin and verify
  const pin = getValue("cashout-pin");

  if (pin === "1234") {
    alert("withdraw success");
    setBalance(newBalance);
  } else {
    return alert("Invalid pin number");
  }
});
