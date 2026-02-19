document.getElementById('add-btn').addEventListener('click', function () {
  const bankAccount = getValue('select-bank');

  if (bankAccount === 'Select back') {
    alert('select a bank');
    return;
  }

  const bankAccountNum = getValue('bank-account');
  if (bankAccountNum.length !== 11) {
    alert('Invalid Account Number');
  }

  const addMoney = getValue('add-amount');

  const currentBalance = getBalance();

  const newBalance = currentBalance + Number(addMoney);

  const pin = getValue('add-pin');

  if (pin === '1234') {
    setBalance(newBalance);
    alert('add money success');
    history(addMoney, bankAccount)
  } else {
    alert('Invalid pin');
  }
});
