const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');
const logic = require('./logic');


const game = ` ${       logic.options[0]},\n              ${logic.options[1]}, \n                      ${logic.options[2]}!`;
console.log(chalk.blue(figlet.textSync(game)));

const questions = [
    {
        type: 'list',
        name: 'user',
        message: 'Which do you choose?',
        choices: logic.options,
    },
];

inquirer.prompt(questions).then((answers) => {
    logic.playGame(answers.user);
    console.log('\n \n');
});
