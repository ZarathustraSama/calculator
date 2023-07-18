function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) return 'Not a chance!';
    return +(number1 / number2).toFixed(10);
}

let firstNumber = null;
let secondNumber = null;
let result = null;
let operatorsArray = ['+', '-', '*', '/'];
let operator = null;

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+') return add(firstNumber, secondNumber);
    else if (operator === '-') return subtract(firstNumber, secondNumber);
    else if (operator === '*') return multiply(firstNumber, secondNumber);
    else if (operator === '/') return divide(firstNumber, secondNumber);
    else return;          
}

let displayValue = '';

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', () => updateDisplayValue(number.id));
});

function updateDisplayValue(value) {
    if (displayValue.length <= 6) {
        displayValue += value;
        display.textContent = displayValue;
    };
}

const operators = document.querySelectorAll('.operator');

operators.forEach(symbol => {
    symbol.addEventListener('click', () => decideOperation(symbol.id))
})

function decideOperation(nextOperator) {
    if (nextOperator === '=' && operatorsArray.includes(operator)) {
        secondNumber = parseFloat(displayValue);
        displayValue = ''
        result = operate(firstNumber, operator, secondNumber);
        updateDisplayValue(result);
        firstNumber = result;
        secondNumber = null;
        operator = null;
    }
    else if (operatorsArray.includes(nextOperator) && operator === null) {
        operator = nextOperator;
        firstNumber = parseFloat(displayValue);
        displayValue = '';
    }
    else if (operator !== null) {
        secondNumber = parseFloat(displayValue);
        result = operate(firstNumber, operator, secondNumber);
        updateDisplayValue(result);
        firstNumber = result;
        secondNumber = null;
    }
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearCalculator);

function clearCalculator() {
    displayValue = '';
    display.textContent = '0';
    firstNumber = null;
    secondNumber = null;
    result = null;
    operator = null;
}

let decimal = false;