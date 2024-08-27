
let operator
let firstNumber
let secondNumber 
let displayValue = [];


const screenText = document.querySelector(".screen-text");
const numberList = document.querySelectorAll(".numbers");

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
        return "ERROR: Division by 0";
    }
    return a / b; 
}

const operate = function (num1, operator, num2) {
    if (operator === "+") {
        return toAdd(num1, num2);
    }
    else if (operator === "-") {
        return toSubtract (num1, num2);
    }
    else if (operator === "*") {
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
        if (screenText.textContent === "0"){
            screenText.textContent = value;
        }
        else {
            screenText.textContent += value;
        }
    })
})
