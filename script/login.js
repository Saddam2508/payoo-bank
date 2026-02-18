document.getElementById('login-btn').addEventListener('click', function () {
  const mobileNumber = getValue('mobile-number');
  if (mobileNumber !== '01535212168') {
    alert(' Invalid number');
    return;
    }
    
  const pin = getValue('pin');
  if (pin !== '1234') {
    alert('Invalid pin');
    return;
  } else {
    alert('login success');
    window.location.replace('../home.html');
  }
});
