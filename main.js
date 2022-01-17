// delcarations
const display = document.getElementById('display');
const display2 = document.getElementById('display2');
let num1 = undefined;
let num2 = undefined;
let equalsPressed = false;
let displayInitialized = false;
let opPerformed = false;
display.innerText = '0';

// operator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a / b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

// display functions
function updateDisplay(value) {
    if (displayInitialized === false) {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    displayInitialized = true;
    opPerformed = false;
}

function clear() {
    displayInitialized = false;
    opPerformed = true;
}

function trueClear() {
    display.innerText = '0';
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    equalsPressed = false;
    displayInitialized = false;
    opPerformed = false;
}

function equals() {
    if (displayInitialized === true) {
        num2 = parseFloat(display.innerText);
        migrateDisplay('');
        num1 = operate(operator, num1, num2);
        display.innerText = num1;
        if (num1 === Infinity) {
            alert("Error!");
            trueClear();
        }
        num1 = undefined;
        num2 = undefined;
        displayInitialized = false;
    }
}

function opEquals() {
    if (displayInitialized === true) {
        num2 = parseFloat(display.innerText);
        migrateDisplay('');
        num1 = operate(operator, num1, num2);
        display.innerText = num1;
        num2 = undefined;
        if (num1 === Infinity) {
            alert("Error!");
            trueClear();
        }
    }
}
/*
function migrateDisplay(operator) {
    display2.textContent = display.textContent + operator;
}
*/
// button functions

const backspace = document.getElementById('backspace');
backspace.addEventListener('click', function () {
    if(opPerformed === false) {
        display.innerText = display.innerText.slice(0, -1)
    };
})