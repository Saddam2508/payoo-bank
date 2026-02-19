document.getElementById('send-btn').addEventListener('click', function () {
  //1.get the user number & validate
  const userNum = getValue('user-account');
  if (userNum.length !== 11) {
    alert('Invalid number');
    return;
  }
  //2.get the amount, validate, convert to Number
  const amount = getValue('send-amount');
  const amountConvert = Number(amount);

  //3.get the current balance, validate, convert to Number
  const balance = getBalance();

  //4.calculate new balance
  const newBalance = balance - amountConvert;

  //5.true:: show and alert > set Balance
  if (newBalance < 0) {
    alert('Invalid amount ');
    return;
  }
  //6.get the pin and verify
  const pin = getValue('send-pin');

  if (pin === '1234') {
    setBalance(newBalance);
    alert('Send Money success');
    history(amountConvert, userNum);
  } else {
    return alert('Invalid pin number');
  }
});
