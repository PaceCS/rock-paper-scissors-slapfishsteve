// This array will hold the options for the game
// Fill in your options below
const options = ['Rock', 'Paper', 'Scissors'];

// This function takes in the userChoice and then prints the results to the console.
function playGame(userChoice) {
    // First remind the user of his/her choice
    console.log('You chose ' + userChoice);

    // Now choose a random number between 0 and 2
    const rand = Math.floor(Math.random() * 3);

    // Then use this random number to give the computer a choice
    const compChoice = options[rand];

    // Now log the computer's choice to the console.
    console.log('The computer chose ' + compChoice);

    if (userChoice == compChoice) {
        console.log('You tied');
    } else if (userChoice == 'Rock') {
        if (compChoice == 'Paper') {
            console.log('You lose');
        } else {
            console.log('You win!');
        }
    } else if (userChoice == 'Paper') {
        if (compChoice == 'Rock') {
            console.log('You win!');
        } else {
            console.log('You lose');
        }
    } else if (compChoice == 'Paper') {
        console.log('You win!');
    } else {
        console.log('You lose');
    }
}

module.exports.playGame = playGame;
module.exports.options = options;
