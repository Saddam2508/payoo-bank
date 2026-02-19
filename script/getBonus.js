document.getElementById('bonus-btn').addEventListener('click', function () {
  const bonusNum = getValue('bonus-number');

  if (!bonusNum.includes('DEMO')) {
    alert('Invalid coupon');
  }
  if (bonusNum.length !== 8) {
    alert('Coupon length must be 8 character');
  }
  if (bonusNum === 'DEMO2026') {
    const currentBalance = getBalance();

    const newBalance = currentBalance + currentBalance * 0.02;

    setBalance(newBalance);
    alert('Coupon add success');
  }
});
