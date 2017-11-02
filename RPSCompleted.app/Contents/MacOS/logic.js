
// This array will hold the options for the game
// Fill in your options below
const options = ['Rock', 'Paper', 'Scissors'];

// This function takes in the userChoice and then prints the results to the console.
function playGame(userChoice) {
    // First remind the user of his/her choice
    console.log(`You chose ${userChoice.toLowerCase()}.`);

    // Now choose a random number between 0 and 2
    const rand = Math.floor(Math.random() * 3);
    // Then use this random number to give the computer a choice
    const compChoice = options[rand];

    // Now log the computer's choice to the console.
    console.log(`The computer chose ${compChoice.toLowerCase()}.`);

    // Now determine the winner using if/else statements
    if (compChoice == userChoice) {
        console.log('You tied.');
    } else if ((options.indexOf(userChoice) - options.indexOf(compChoice) + 6) % 3 == 1 ) {
        console.log(`${userChoice} beats ${compChoice}.  You win!`);
    } else {
        console.log(`${compChoice} beats ${userChoice}.You lose.`);
    }

}


























module.exports.playGame = playGame;
module.exports.options = options;
