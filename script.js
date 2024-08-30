//when clicking an operator at subsequent points, should display the solution and store solution as firstNumber and currentInput  

let operatorClicked = false;
let currentInput = "";
let operatorValue = "";
let firstNumber = "";
let secondNumber = "";

const maxDigits = 12;
const screenText = document.querySelector(".screen-text");
const numberList = document.querySelectorAll(".numbers");
const operatorList = document.querySelectorAll(".operators");
const equal = document.querySelector(".large-equal");
const resetBtn = document.querySelector(".large-reset");

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
        if (screenText.textContent === "0" || operatorClicked) {
            currentInput = value;
            screenText.textContent = currentInput;
            operatorClicked = false;
        } else if (currentInput.length < maxDigits) {
            currentInput += value;
            screenText.textContent = currentInput;
        }
    });
});

operatorList.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (operatorClicked) {
            secondNumber = currentInput; 
            const solution = operate(firstNumber, operatorValue, secondNumber);
            firstNumber = solution; 
            screenText.textContent = solution;
            currentInput = "";
            operatorValue = operator.textContent; 
        }
        else {
            firstNumber = currentInput; 
            operatorValue = operator.textContent; 
            currentInput = "";
            operatorClicked = true;
        }
     })
})  

const equals = function() {
    equal.addEventListener("click", () => {
        secondNumber = currentInput;
        const solution = operate(firstNumber, operatorValue, secondNumber);
        screenText.textContent = solution; 
        //Reset for new calc
        operatorClicked = false; 
        firstNumber = solution; 
        currentInput = solution;
    })
}

equals();

const reset = function() {
    resetBtn.addEventListener("click", () => {
        firstNumber = "";
        secondNumber = "";
        operatorValue = "";
        currentInput = "";
        operatorClicked = false; 
        screenText.textContent = "0";
    })
}

reset();

