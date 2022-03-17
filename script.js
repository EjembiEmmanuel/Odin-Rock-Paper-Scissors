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
        console.log("*******************************");
        return "You Lose! Paper covers Rock";
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        playerScore++;
        console.log("*******************************");
        return "You Win! Rocks smashes Scissors";
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'rock') {
        console.log("*******************************");
        return "It's a tie";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        playerScore++;
        console.log("*******************************");
        return "You Win! Scissors cuts Paper";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'Scissors') {
        console.log("*******************************");
        return "It's a tie";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        computerScore++;
        console.log("*******************************");
        return "You Lose! Rock smashes scissors";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'paper') {
        console.log("*******************************");
        return "It's a tie";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        playerScore++;
        console.log("*******************************");
        return "You Win! Paper covers Rock";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        computerScore++;
        console.log("*******************************");
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
    console.log("Computer Selection: ", computerSelection);
    console.log("Player Selction: ", playerSelection);
    console.log(result);
}


let choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', game));


function winner() {
    
}


