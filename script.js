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
    return number1 / number2;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function operate(firstNumber, operator, secondNumber) {
    if (operator === '+') return add(firstNumber, secondNumber);
    else if (operator === '-') return subtract(firstNumber, secondNumber);
    else if (operator === '*') return multiply(firstNumber, secondNumber);
    else if (operator === '/') return divide(firstNumber, secondNumber);
    else return;          
}

let displayValue = '';

const numbers = document.querySelectorAll('.number');
const display = document.querySelector('.display');

numbers.forEach(number => () => {
    const value = `${number.id}`;
    addEventListener('click', () => updateDisplayValue(value));
})

function updateDisplayValue (value) {
    displayValue += value;
    display.textContent = displayValue;
}

const operators = document.querySelectorAll('.operator');

operators.forEach(operator => () => {

})