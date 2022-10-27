const reasonInput = document.getElementById('input-reason');
const amountInput = document.getElementById('input-amount');
const cancelBtn = document.getElementById('btn-cancel');
const confirmBtn = document.getElementById('btn-confirm');
const expensesList = document.getElementById('expenses-list');
const totalexpensesoutput = document.getElementById('total-expenses');
let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';

}

confirmBtn.addEventListener('click', () => {
    const enterdReason = reasonInput.value;
    const enterdAmount = amountInput.value;

    if (enterdReason.trim().length <= 0 ||
        enterdAmount <=0 ||
        enterdAmount.trim().length <= 0
        ) {
            return;
          }
          const newItem = document.createElement('ion-item');
          newItem.textContent = enterdReason +  ':' +enterdAmount +' dinars'; 

          expensesList.appendChild(newItem);

          totalExpenses += +enterdAmount;
          totalexpensesoutput.textContent = totalExpenses;
          clear();

        });

 cancelBtn.addEventListener('click', clear);