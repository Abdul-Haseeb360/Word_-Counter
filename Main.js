import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentance",
        type: "input",
        message: "Enter your sentance here!! to count its word:"
    }]);
const word = answer.sentance.split(" ");
console.log(word);
console.log(`Your Paragraph word is:  ${word.length}`);
