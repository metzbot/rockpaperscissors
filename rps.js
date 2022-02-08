/*Play rock paper scissors with browser console
Rock beats scissors
Scissors beats Paper
Paper beats rock 

Cue up game by writing gamePrompt() in console*/

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

//game result variable
let result = "";

//prompts user to play game
function gamePrompt() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    if ((choice === "rock") || (choice === "paper") || (choice === "scissors")) {
        return result = playRound(choice, computerPlay());
    } else {
        alert("You entered something other than rock, paper, or scissors. Click OK to try again.");
        gamePrompt();
    }
}

//plays a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    if (checkTie(playerSelection, computerSelection)) {
        return "It's a tie.";
    } else if (playerSelection === "rock") {
        if (playerRock(computerSelection)) {
            return "You win! Rock smashes scissors.";
        } else {
            return "You lose. Paper wraps rock.";
        }
    } else if (playerSelection === "paper") {
        if (playerPaper(computerSelection)) {
            return "You win! Paper wraps rock.";
        } else {
            return "You lose. Scissors cuts paper.";
        }
    } else if (playerSelection === "scissors") {
        if (playerScissors(computerSelection)) {
            return "You win! Scissors cuts paper.";
        } else {
            return "You lose. Rock smashes scissors.";
        }
    }
}

function game() {
    for (let step = 0; step < 5; step++) {
        gamePrompt();
        console.log(result);
    }
}

function printEvens() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log("even")
        } else { console.log(`${i}`)}
    }
}


/* for each i in the interval {
    check if i has a divisor from 1..i
    if yes => the value is not a prime
    if no => the value is a prime, show it
} */


function printPrimes(n) {
    nextPrime:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}