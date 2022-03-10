function computerPlay () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice;

    choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function play(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return "You Lose! Paper covers Rock";
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return "You Win! Rocks smashes Scissors";
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
        return "It's a tie";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        return "You Win! Scissors cuts Paper";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'Scissors') {
        return "It's a tie";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        return "You Lose! Rock smashes scissors";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper') {
        return "It's a tie";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return "You Win! Paper covers Rock";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        return "You Lose! Scissors cuts Paper";
    }
}

let computerChoice = computerPlay();
let playerChoice = 'Rock';
result = play(playerChoice, computerChoice);
console.log(result);