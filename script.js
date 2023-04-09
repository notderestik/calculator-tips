const billAmountInput = document.getElementById('bill-amount');
const tipPercentageInput = document.getElementById('tip-percentage');
const calculateTipButton = document.getElementById('calculate-tip');
const tipAmountOutput = document.getElementById('tip-amount');
const totalAmountOutput = document.getElementById('total-amount');
const resetValuesButton = document.getElementById('reset-values');

resetValuesButton.addEventListener('click', () => {
  billAmountInput.value = 0;
  tipPercentageInput.value = 15;
  tipAmountOutput.innerText = '0.00';
  totalAmountOutput.innerText = '0.00';
});

calculateTipButton.addEventListener('click', () => {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value) / 100;
  const tipAmount = billAmount * tipPercentage;
  const totalAmount = billAmount + tipAmount;
  tipAmountOutput.innerText = tipAmount.toFixed(2);
  totalAmountOutput.innerText = totalAmount.toFixed(2);
});