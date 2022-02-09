/*Play rock paper scissors with browser console
Rock beats scissors
Scissors beats Paper
Paper beats rock */

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

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScoreDisp = document.getElementById('playerScore');
const computerScoreDisp = document.getElementById('computerScore');

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
            const restartMsg = document.createElement('h3');
            restartMsg.classList.add('restartMsg');
            restartMsg.textContent = 'Want to play again?';
            scoreMessage.appendChild(restartMsg);
            const restartBtn = document.createElement('button');
            restartBtn.classList.add('restartBtn');
            restartBtn.textContent = 'Play Again';
            scoreMessage.appendChild(restartBtn);
            restartBtn.addEventListener('click', () => {
                playerScoreCount.textContent = `Player:`;
                compScoreCount.textContent = `Computer:`;
                content.textContent = '';
                restartMsg.textContent = '';
            });
        }
    })});
