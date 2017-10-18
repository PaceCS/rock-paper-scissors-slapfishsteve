const inquirer = require('inquirer');
const logic = require('./logic');

console.log(`\n \n Get ready to play ${logic.options[0]}, ${logic.options[1]}, ${logic.options[2]}!\n`);

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
