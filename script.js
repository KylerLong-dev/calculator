let currentInput = "";
let operatorValue = "";
let firstNumber = "";
let secondNumber = "";

const screenText = document.querySelector(".screen-text");
const numberList = document.querySelectorAll(".numbers");
const operatorList = document.querySelectorAll(".operators");

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
        currentInput = screenText.textContent;
    })
})

//need to store currentInput inside firstNumber when operator button is pressed
//store operator inside operatorValue when operator pressed
//store currentInput inside secondNumber when equal is pressed prior to calling operate function with args

operatorList.forEach((operator) => {
    operator.addEventListener("click", () => {
        const value = operator.textContent;    
        screenText.textContent += value;    
    })
})

//Pressing "=" should clear the screen and display the result by calling the operation function
//when I call operate, variables storing numbers and operator data will be called as arguments 