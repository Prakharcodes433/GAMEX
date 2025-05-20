let display = document.getElementById('display');
let currentInput = '';
let lastInput = '';
let operatorSet = false;

function appendNumber(num) {
  currentInput += num;
  display.value = currentInput;
  operatorSet = false;
}

function appendOperator(op) {
  if (currentInput === '' || operatorSet) return;
  currentInput += op;
  display.value = currentInput;
  operatorSet = true;
}

function appendDot() {
  let parts = currentInput.split(/[\+\-\*\/]/);
  let last = parts[parts.length - 1];
  if (!last.includes('.')) {
    currentInput += '.';
    display.value = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
  operatorSet = false;
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
    operatorSet = false;
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
}