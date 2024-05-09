#! usr/bin/env node
import inquirer from "inquirer"


const answer : {
  sentance : string
} = await inquirer.prompt([{
  name : "sentance",
  type : "input",
  message : "Enter your sentance here!! to count its word:"
}]);

const word = answer.sentance.trim().split(" ")

console.log(word);

console.log(`Your Paragraph word is:  ${word.length}`);

