
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
const deleteBtn = document.querySelector(".delete");

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
        return "ERROR";
    }
}

numberList.forEach((number) => {
    number.addEventListener("click", () => {
        const value = number.textContent;
        if (screenText.textContent === "0" || operatorClicked 
            && currentInput.length < maxDigits) {
            currentInput += value;
            screenText.textContent = currentInput;
        } 
        else if (currentInput.length < maxDigits) {
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
        let solution = operate(firstNumber, operatorValue, secondNumber);
        let solutionStr = solution.toString();

        if (solutionStr.length > maxDigits) {
            if (solutionStr.includes('.')) {
                const integerPart = solutionStr.split('.')[0];
                const decimalPart = solutionStr.split('.')[1].slice(0, maxDigits - integerPart.length);
                solutionStr = integerPart + '.' + decimalPart;
            } else {
                solutionStr = solutionStr.slice(0, maxDigits);
            }
            solution = parseFloat(solutionStr); 
        }

        screenText.textContent = solution;
        // Reset for new calc
        operatorClicked = false; 
        firstNumber = solution; 
        currentInput = solution;
    });
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

const deleteButton = function() {
    deleteBtn.addEventListener("click", () => {
        if (screenText.textContent === "0") {
            return "0";
        }
        else {
            let lastNumber = currentInput;
            screenText.textContent = screenText.textContent.slice(0,-1);
            currentInput = lastNumber.slice(0, -1);
            if (currentInput === "") {
                screenText.textContent = "0";
            }
        }
    })
}   

deleteButton();
