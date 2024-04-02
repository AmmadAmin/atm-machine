#! /usr/bin/env node
import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";
//initialize user balance and pin code 
let myBalance = 75000;
let myPin = 1234;
//printing welcome message
console.log(chalk.blue("\n \tWelcome to Ammad ATM MACHINE! pin code is '1234'\n ."));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nPin is Correct, Login Successful!\n"));
    // console.log(`Current Balance is ${myBalance}` );
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operator",
            choices: ["withdraw Amount", "check_balance"],
        }
    ]);
    if (operationAnswer.operation === "withdraw Amount") {
let  withdrawAmount = await inquirer.prompt([
    {
        name: "withdrawMethod",
        type: "list",
        message: "select a withrawal method",
        choices: ["Fast Cash", "Enter Amount"]

    }
])
if(withdrawAmount.withdrawMethod==="Fast Cash"){
    let fastCashAns = await inquirer.prompt([
        {
            name: "fastCash",
            type: "list",
            message: "How much do you want to Withdraw?",
            choices: [ 1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000]
        }
    ])
    if (fastCashAns.fastCash > myBalance){
        console.log(chalk.red("Insufficient Balance"));
    
    }
    else{
        myBalance -= fastCashAns.fastCash
        console.log(`${fastCashAns.fastCash} withdraw successfully`);
        console.log(chalk.red(`your remainig balance is: ${myBalance}`));
    }
}

 else if(withdrawAmount.withdrawMethod ==="Enter Amount"){

    let amountAnswer = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "How much do you want to withdraw? (Between 100-75000):"
        }
    ]);
    if (amountAnswer.amount > myBalance) {
        console.log(chalk.red("Sorry, insufficient balance!"));
    }
    else {
        myBalance -= amountAnswer.amount;
        console.log(`${amountAnswer.prompt} withdraw successly`);
        console.log(chalk.green(`your remainig balance is: ${myBalance}`));
    }

}

        
    }
    else if (operationAnswer.operation === "check_balance") {
        console.log(chalk.yellow(`Your current balance is : ${myBalance}`));
    }
}
else {
    console.log(chalk.red("Please enter a valid pin!"));
}
