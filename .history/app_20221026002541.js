const reasonInput = document.getElementById('input-reason');
const amountInput = document.getElementById('input-amount');
const cancelBtn = document.getElementById('btn-cancel');
const confirmBtn = document.getElementById('btn-confirm');
const expensesList = document.getElementById('expenses-list');
const totalexpensesoutput = document.getElementById('total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');


let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';


}

confirmBtn.addEventListener('click', () => {
    const enterdReason  = reasonInput.value;
    const enterdAmount = amountInput.value;

    if (enterdReason.trim().length <= 0 ||
        enterdAmount <=0 ||
        enterdAmount.trim().length <= 0
          ) {
            alertCtrl.create({
            
                message: 'Please enter valid reason ad amount!',
                header: 'invalid inputs',
                buttons: ['Okay']
        })
        .then(alerElement =>  { 
            alerElement.present();
        });
            return;
          }

          const newItem = document.createElement('ion-item');
          newItem.textContent = enterdReason +  ': $' +enterdAmount;

          expensesList.appendChild(newItem);

          totalExpenses += +enterdAmount;
          totalexpensesoutput.textContent = totalExpenses;
          clear();

});

cancelBtn.addEventListener('click', clear);