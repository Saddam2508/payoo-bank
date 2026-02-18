document.getElementById('cashout-btn').addEventListener('click', function () {
  //1.get the agent number & validate
  const agentNum = getValue('agent-number');
  console.log(agentNum);
  //2.get the amount, validate, convert to Number
  const amount = getValue('cashout-amount');
  const amountConvert = Number(amount);
  console.log(amountConvert);
  //3.get the current balance, validate, convert to Number
  const balance = getText('balance');
  const balanceConvert = Number(balance.slice(1));
  console.log(balanceConvert);
  //4.calculate new balance
  const newBalance = balanceConvert - amountConvert;

  console.log(newBalance);
  //5.get the pin and verify
  const pin = getValue('cashout-pin');
  console.log(pin);
  if (pin !== '1234') {
    return alert('Invalid pin number');
  }
  //6.true:: show and alert > set Balance
  if (newBalance < 0) {
    alert('Invalid amount ');
    return;
  } else {
    alert('withdraw success');
    const setBalance = document.getElementById('balance');
    setBalance.innerText = `$${newBalance}`;
  }
  //7.true:: show and error alert > return
});
