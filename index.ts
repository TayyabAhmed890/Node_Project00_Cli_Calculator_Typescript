#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([

    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },

    {
        message: "Select One of the operator to Perform Action",
        type: "List",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },

]);

console.log(answer);

if (answer.operator === "+") {
    console.log(answer.firstNumber+answer.secondNumber);
       
} else if (answer.operator === "-") {
    console.log(answer.firstNumber-answer.secondNumber);
    
}
else if (answer.operator === "*") {
    console.log(answer.firstNumber*answer.secondNumber);
    
}
else if (answer.operator === "/") {
    console.log(answer.firstNumber/answer.secondNumber);
    
}
else
console.log("Please Enter Valid Operator");

