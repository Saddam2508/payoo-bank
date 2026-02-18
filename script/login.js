document.getElementById('login-btn').addEventListener('click', function () {
  const mobileNumber = getValue('mobile-number');
  if (mobileNumber !== '01234567891') {
    alert(' Invalid number');
    return;
  }

  const pin = getValue('pin');
  if (pin !== '1234') {
    alert('Invalid pin');
    return;
  } else {
    alert('login success');
    window.location.assign('../home.html');
  }
});
