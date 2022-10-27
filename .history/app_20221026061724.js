const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
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
           presentAlert();
            return;

          }
          const newItem = document.createElement('ion-item');
          newItem.textContent = enterdReason +  ':' +enterdAmount +' dinars'; 

          expensesList.appendChild(newItem);

          totalExpenses += +enterdAmount;
          totalexpensesoutput.textContent = totalExpenses;
          clear();

        });

        function presentAlert() {
            const alert = document.createElement('ion-alert');
            alert.header = 'Alert!';

            alert.message = 'Please enter valid reason !';
        
            alert.buttons = [
            {
                text : 'Yes',
                handler : () => {
                    console.log('Yes')
                }
            },
            {
                text : 'No',
                handler : () => {
                    console.log('No')
                }
            }];
        
            document.body.appendChild(alert);
            alert.present();
        }

 cancelBtn.addEventListener('click', clear);