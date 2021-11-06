"use strict";
const prompt = require("prompt-sync")();

const OPTIONS = `
Enter of the following key:
r: Rock
p: Paper
s: Scissor
`;
const INIT_MESSAGE = `
Welcome to -**Rock** | **Scissor** | **Paper**- Game

You are playing against 'Computer' player
${OPTIONS}`;
const ERROR_MESSAGE = `
Error!!! Incorrect input${OPTIONS}`;
const ROCK = 'r';
const PAPER = 'p';
const SCISSOR = 's';
const RETRY_MESSAGE = `Your choice is same as that of computer. Please retry!`;
const choices = [ROCK, PAPER, SCISSOR];
const youWonMessage = (u, c) => `Your choice '${u}' wins against computer '${c}'`;

main();

function main() {
    const userInput = prompt(INIT_MESSAGE);
    validateInput(userInput);

    const computerInput = choices[Math.floor(Math.random() * choices.length)];
    const res = getResult(userInput, computerInput);
    if (res !== RETRY_MESSAGE) {
        if (res.includes('win')) {
            console.log('\x1b[32m%s\x1b[0m', res);
        } else {
            console.log('\x1b[31m%s\x1b[0m', res);
        }
    } else {
        console.log('\x1b[36m%s\x1b[0m', RETRY_MESSAGE);
        main();
    }
    
}

function getResult(userInput, computerInput) {
    if (userInput === computerInput) {
        return RETRY_MESSAGE;
    } else if (userInput === ROCK && computerInput == PAPER) {
        return youLostMessage(userInput, computerInput);
    } else if (userInput === ROCK && computerInput == SCISSOR) {
        return youWonMessage(userInput, computerInput);
    } else if (userInput === PAPER && computerInput == SCISSOR) {
        return youLostMessage(userInput, computerInput);
    } else if (userInput === PAPER && computerInput == ROCK) {
        return youWonMessage(userInput, computerInput);
    } else if (userInput === SCISSOR && computerInput == ROCK) {
        return youLostMessage(userInput, computerInput);
    } else if (userInput === SCISSOR && computerInput == PAPER) {
        return youWonMessage(userInput, computerInput);
    }
}

function validateInput(userInput) {
    if (choices.indexOf(userInput) === -1) {
        console.log('\x1b[31m%s\x1b[0m', ERROR_MESSAGE);
        process.exit(0);
    }
}

function youLostMessage(u, c) {
    return `Your choice '${u}' loses to computer '${c}'`;
}
