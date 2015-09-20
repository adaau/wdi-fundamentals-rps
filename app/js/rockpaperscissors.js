////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;
var winner;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move !== null) {
        return move;
    }
    else {
        return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move !== null) {
        return move;
    }
    else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == 'rock') {
        if (computerMove == 'rock') {
            winner = 'tie';
        }
        else if (computerMove == 'paper') {
            winner = 'computer';
        }
        else if (computerMove == 'scissors') {
            winner = 'player';
        }
        else {
            winner = null;
        }
    }
    else if (playerMove == 'paper') {
        if (computerMove == 'rock') {
            winner = 'player';
        }
        else if (computerMove == 'paper') {
        winner = 'tie';
        }
        else if (computerMove == 'scissors') {
        winner = 'computer';
        }
        else {
            winner = null;
        }
    }
    else if (playerMove == 'scissors') {
        if (computerMove == 'rock') {
            winner = 'computer';
        }
        else if (computerMove == 'paper') {
            winner = 'player';
        }
        else if (computerMove == 'scissors') {
            winner = 'tie';
        }
        else {
            winner = null;
        }
    }
    else {
        winner = null;
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);

        if (winner == 'player') {
            playerWins++;
        }
        else if (winner == 'computer') {
            computerWins++;
        }

        console.log('Player chose ' + playerMove + 'while computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + 'to ' + computerWins);
    }

    return [playerWins, computerWins];
}