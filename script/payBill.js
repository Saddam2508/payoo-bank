document.getElementById('pay-btn').addEventListener('click', function () {
  const payAccount = getValue('select-pay');

  if (payAccount === 'Select back') {
    alert('select a pay account');
    return;
  }

  const payAccountNum = getValue('pay-account');
  if (payAccountNum.length !== 11) {
    alert('Invalid Account Number');
  }

  const payMoney = getValue('pay-amount');

  const currentBalance = getBalance();

  const newBalance = currentBalance - Number(payMoney);

  const pin = getValue('pay-pin');

  if (pin === '1234') {
    setBalance(newBalance);
    alert('pay bill success');
    history(payMoney, payAccount);
  } else {
    alert('Invalid pin');
  }
});
