// declarations
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
function updateDisplay(value) {         // function for numbers buttons
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

function migrateDisplay(operator) {
    display2.textContent = display.textContent + operator;
}

// button event listeners
const backspace = document.getElementById('backspace');
backspace.addEventListener('click', function () {
    if (opPerformed === false) {
        display.innerText = display.innerText.slice(0, -1)
    };
});

const decimal = document.getElementById('decimal');
decimal.addEventListener('click', function() {
    if (display.textContent.includes('.') === false) {
        updateDisplay('.')
    };
});

const equal = document.getElementById('equal');
equal.addEventListener('click', function() {
    if(isNaN(num1) === false && isNaN(num2) === true) {
        equals(); 
    };
});

const adds = document.getElementById('add');
adds.addEventListener('click', function() {
    if (num1 === undefined) {
        num1 = parseFloat(display.innerText)
        operator = add;
        migrateDisplay('+');
        clear();
    } else if (isNaN(num1) === false && isNaN(num2) === true) {
        opEquals();
        operator = add;
        migrateDisplay('+');
        clear();
    };
});

const subs = document.getElementById('subtract');
subs.addEventListener('click', function() {
    if (num1 === undefined) {
        num1 = parseFloat(display.innerText)
        operator = subtract;
        migrateDisplay('-');
        clear();
    } else if (isNaN(num1) === false && isNaN(num2) === true) {
        opEquals();
        operator = subtract;
        migrateDisplay('-');
        clear();
    };
});