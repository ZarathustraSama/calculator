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
const operators = ['+', '-', '*', '/'];

function operate(firstNumber, operator, secondNumber) {
    if (operator === operators[0]) return add(firstNumber, secondNumber);
    else if (operator === operators[1]) return subtract(firstNumber, secondNumber);
    else if (operator === operators[2]) return multiply(firstNumber, secondNumber);
    else if (operator === operators[3]) return divide(firstNumber, secondNumber);
    else return;          
}