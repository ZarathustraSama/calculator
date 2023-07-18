function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return +(number1 * number2).toFixed(6);
}

function divide(number1, number2) {
    if (number2 === 0) return 'Not a chance!';
    return +(number1 / number2).toFixed(6);
}

let firstNumber = null;
let secondNumber = null;
let result = null;
const operatorsArray = ['+', '-', '*', '/'];
let operator = null;
const keyboardNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
    if (displayValue !== '') {
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
    decimal = false;
}

let decimal = false;
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', enableDecimals);

function enableDecimals() {
    if (!decimal) {
        decimal = true;
        updateDisplayValue('.');
    }
}

const backspaceButton = document.querySelector('#backspace');
backspaceButton.addEventListener('click', backTrack);

function backTrack() {
    if (displayValue.length > 1) {
        displayValue = displayValue.replace(/.$/, '');
        updateDisplayValue(displayValue);
    }
    else if (displayValue.length === 1) {
        displayValue = '';
        display.textContent = '0';
    }
}

function getKeyboardInput() {
    window.addEventListener('keyup', (e) => {
        if (keyboardNumbers.includes(e.key)) updateDisplayValue(e.key);
        else if (operatorsArray.includes(e.key)) decideOperation(e.key);
        else if (e.key === '=' || e.key === 'Enter') decideOperation('=');
    })
}

getKeyboardInput();