function getValue(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}
function getBalance() {
  const input = document.getElementById("balance");
  const value = input.innerText;
  return Number(value);
}

function setBalance(value) {
  const input = document.getElementById("balance");
  input.innerText = value;
}
