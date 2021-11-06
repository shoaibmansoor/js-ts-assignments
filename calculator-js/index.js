"use strict";
const prompt = require("prompt-sync")();

const SUPPORTED_OPERATIONS = `
1. Add
2. Subtract
3. Multiple
4. Divide
5. Pow
`;
const INIT_MESSAGE = `
Welcome to the amazing calculator!!!

Choose one of the following option(s):${SUPPORTED_OPERATIONS}`;
const ERROR_MESSAGE = `Error!!! Incorrect input provided. Choose one of the following option:
${SUPPORTED_OPERATIONS}`;
const RE_INIT = "Want to use more operations? Press y to continue";
const BYE_MESSAGE = "adiós";
const OPERATIONS = {
    ADD: 1,
    SUBTRACT: 2,
    MULTIPLY: 3,
    DIVIDE: 4,
    POW: 5,
}


function main() {
    const chosenOperation = Number(prompt(INIT_MESSAGE));
    validateInput(chosenOperation);
    
    const firstNumber = Number(prompt("Enter first number: "));
    const secondNumber = Number(prompt("Enter second number: "));
    calculate(chosenOperation, firstNumber, secondNumber);
    askUserToRestart();
}

function calculate(chosenOperation, firstNumber, secondNumber) {
    const { ADD, SUBTRACT, MULTIPLY, DIVIDE, POW } = OPERATIONS;
    let result;
    if (chosenOperation == ADD) {
        result = firstNumber + secondNumber;
    } else if (chosenOperation == SUBTRACT) {
        result = firstNumber - secondNumber;
    } else if (chosenOperation == MULTIPLY) {
        result = firstNumber * secondNumber;
    } else if (chosenOperation == DIVIDE) {
        result = firstNumber / secondNumber;
    } else if (chosenOperation == POW) {
        result = firstNumber ** secondNumber;
    }
    console.log(result);
}

function askUserToRestart() {
    const toInit = prompt(RE_INIT);
    if (toInit == 'y') {
        main();
    } else {
        console.log(BYE_MESSAGE);
    }
}

function validateInput(initCode) {
    if ([1, 2, 3, 4, 5].indexOf(initCode) === -1) {
        console.log(ERROR_MESSAGE);
        process.exit(0);
    }
}

main();







