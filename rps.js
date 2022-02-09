/*Play rock paper scissors with browser console
Rock beats scissors
Scissors beats Paper
Paper beats rock 

Cue up game by writing gamePrompt() in console*/

//global score variables
let playerScore = 0;
let computerScore = 0;
let winner = '';
let result = '';

//returns random integer from 0 to max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//returns random result of rock, paper, or scissors
function computerPlay() {
    let rps = getRandomInt(3);
    if (rps === 0) {
        return "rock";
    } else if (rps === 1) {
        return "paper";
    } else
        return "scissors";
}

//tie checker
function checkTie(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return true;
    }
}

//player chooses rock
function playerRock(computerSelection) {
    if (computerSelection === "scissors") {
        return true;
    } 
}

//player chooses paper
function playerPaper(computerSelection) {
    if (computerSelection === "rock") {
        return true;
    }
}

//player chooses scissors
function playerScissors(computerSelection) {
    if (computerSelection === "paper") {
        return true;
    }
}


//prompts user to play game
/* function gamePrompt() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    if ((choice === "rock") || (choice === "paper") || (choice === "scissors")) {
        return result = playRound(choice, computerPlay());
    } else {
        alert("You entered something other than rock, paper, or scissors. Click OK to try again.");
        gamePrompt();
    }
} */

//plays a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    if (checkTie(playerSelection, computerSelection)) {
        return "It's a tie.";
    } else if (playerSelection === "rockBtn") {
        if (playerRock(computerSelection)) {
            playerScore++;
            return "You win! Rock smashes scissors.";
        } else {
            computerScore++;
            return "You lose. Paper wraps rock.";
        }
    } else if (playerSelection === "paperBtn") {
        if (playerPaper(computerSelection)) {
            playerScore++;
            return "You win! Paper wraps rock.";
        } else {
            computerScore++;
            return "You lose. Scissors cuts paper.";
        }
    } else if (playerSelection === "scissorsBtn") {
        if (playerScissors(computerSelection)) {
            playerScore++;
            return "You win! Scissors cuts paper.";
        } else {
            computerScore++;
            return "You lose. Rock smashes scissors.";
        }
    }
}

/* let roundResult;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        roundResult = playRound(button.id, computerPlay());
        const scoreContainer = document.querySelector('score');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = roundResult;
        scoreContainer.appendChild(content);
    });
}); */

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScoreDisp = document.getElementById('playerScore');
const computerScoreDisp = document.getElementById('computerScore');

/* rockBtn.addEventListener('click', () => {
    result = playRound('rock', computerPlay()); });
paperBtn.addEventListener('click', () => {
    result = playRound('paper', computerPlay()); });
scissorsBtn.addEventListener('click', () => {
    result = playRound('scissors', computerPlay()); }); */

const btns = document.querySelectorAll('button');
const content = document.createElement('div');
const playerScoreCount = document.getElementById('player');
const compScoreCount = document.getElementById('computer');
btns.forEach((button) => {
    button.addEventListener('click', () => {
        result = playRound(button.id, computerPlay());
        content.classList.add('content');
        content.textContent = result;
        scoreMessage.appendChild(content);
        playerScoreCount.textContent = `Player: ${playerScore}`
        compScoreCount.textContent = `Computer: ${computerScore}`;
        if ( (playerScore === 5) || (computerScore === 5) ) {
            if ( playerScore > computerScore ) {
                content.textContent = 'Congratulations, you won five rounds!';
            } else { content.textContent = 'You\'re clearly terrible at this game! You lost!' };
        }
    })});



/* function game() {
    for (let step = 0; step < 5; step++) {
        gamePrompt();
        console.log(result);
    }
} */

//bunch of random junk down here
// function printEvens() {
//     for (let i = 0; i <= 10; i++) {
//         if (i % 2 == 0) {
//             console.log("even")
//         } else { console.log(`${i}`)}
//     }
// }


/* for each i in the interval {
    check if i has a divisor from 1..i
    if yes => the value is not a prime
    if no => the value is a prime, show it
} */


// function printPrimes(n) {
//     nextPrime:
//     for (let i = 2; i <= n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//         console.log(i);
//     }
// }