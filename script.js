function computerPlay () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice;

    choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

let playerScore = 0;
let computerScore = 0;

function play(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        computerScore++;
        return "You Lose! Paper covers Rock";
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        playerScore++;
        return "You Win! Rocks smashes Scissors";
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
        return "It's a tie";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        playerScore++;
        return "You Win! Scissors cuts Paper";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'scissors') {
        return "It's a tie";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        computerScore++;
        return "You Lose! Rock smashes scissors";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper') {
        return "It's a tie";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        playerScore++;
        return "You Win! Paper covers Rock";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        computerScore++;
        return "You Lose! Scissors cuts Paper";
    }
}

function game() {
    let playerSelection;
    if(this.textContent == 'Rock' || this.textContent == 'Paper' || this.textContent == 'Scissors') {
        playerSelection = this.textContent;
    }

    let computerSelection = computerPlay();
    let result;
    result = play(playerSelection, computerSelection);

    let playerDisplaySelection = document.querySelector('.player-selection')
    let computerDisplaySelection = document.querySelector('.computer-selection')
    playerDisplaySelection.textContent = playerSelection;
    computerDisplaySelection.textContent = computerSelection;

    let displayResult = document.querySelector('.result');
    displayResult.textContent = result;
    
    let playerDisplayScore = document.querySelector('.player-score')
    let computerDisplayScore = document.querySelector('.computer-score')
    playerDisplayScore.textContent = playerScore;
    computerDisplayScore.textContent = computerScore;

    let winner = document.querySelector('.winner');
    if(playerScore == 5) {
        winner.textContent = "You Win!";;
    } else if(computerScore == 5) {
        winner.textContent = "You Lose, the computer wins.";
    }
}


let choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', game));



