function getValue(id) {
  const input = document.getElementById(id);
  const value = input.value;
  return value;
}
function getBalance() {
  const input = document.getElementById('balance');
  const value = input.innerText;
  return Number(value);
}

function setBalance(value) {
  const input = document.getElementById('balance');
  input.innerText = value;
}

function showOnly(id) {
  const addMoney = document.getElementById('add-money');
  const cashout = document.getElementById('cashout');
  const sendMoney = document.getElementById('send-money');
  const history = document.getElementById('history');

  addMoney.classList.add('hidden');
  cashout.classList.add('hidden');
  sendMoney.classList.add('hidden');
  history.classList.add('hidden');

  const selected = document.getElementById(id);
  selected.classList.remove('hidden');
}

function history(money, bankAccount) {
  const historyContainer = document.getElementById('history-container');
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="transaction-card p-5 bg-base-100">
 Money success from $${money}, acc-no ${bankAccount} at ${new Date()}
  </div>
  `;
  historyContainer.appendChild(div);
}
