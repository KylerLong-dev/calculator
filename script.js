
const maxDigits = 12;
let currentInput = "";
let operatorValue = "";
let firstNumber = "";
let secondNumber = "";

const screenText = document.querySelector(".screen-text");
const numberList = document.querySelectorAll(".numbers");
const operatorList = document.querySelectorAll(".operators");
const equal = document.querySelector(".large-equal");

const toAdd = function (a, b) {
    return a + b; 
}

const toSubtract = function (a, b) {
    return a - b;
}

const toMultiply = function (a, b) {
    return a * b;
}

const toDivide = function (a, b) {
    if (b === 0) {
        return "*Facepalm*";
    }
    return a / b; 
}

const operate = function (num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    if (operator === "+") {
        return toAdd(num1, num2);
    }
    else if (operator === "-") {
        return toSubtract(num1, num2);
    }
    else if (operator === "x") {
        return toMultiply(num1, num2);
    }
    else if (operator === "/") {
        return toDivide(num1, num2);
    }
    else {
        return "ERROR: Invalid Operator.";
    }
}

numberList.forEach((number) => {
    number.addEventListener("click", () => {
        const value = number.textContent;
        if (screenText.textContent.length < maxDigits) {
            if (screenText.textContent === "0"){
                screenText.textContent = value;
            }
            else {
                screenText.textContent += value;
            }
            currentInput += value;
        }
    })
})

operatorList.forEach((operator) => {
    operator.addEventListener("click", () => {
        const value = operator.textContent;    
        screenText.textContent += value;
        firstNumber = currentInput;  
        currentInput = "";
        operatorValue = value;
    })
})

const equals = function() {
    equal.addEventListener("click", () => {
        secondNumber = currentInput;
        const solution = operate(firstNumber, operatorValue, secondNumber);
        screenText.textContent = solution; 
    })
}

equals();