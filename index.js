#! /usr/bin/env node
import inquirer from "inquirer";
// 1)  Computer will generate a random number
//  2) user input for guessing number
// 3) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessingNumber",
        type: "number",
        message: "please guess a number between 1-6",
    },
]);
if (answer.UserGuessingNumber === randomNumber) {
    console.log("congtralation! you guess right number");
}
else {
    console.log("you guess wrong number");
}
