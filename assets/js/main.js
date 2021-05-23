'use strict';
/* "Const" Setting need in functions */
const rock = document.querySelector('#rock').addEventListener('click', game);
const paper = document.querySelector('#paper').addEventListener('click', game);
const scissors = document.querySelector('#scissors').addEventListener('click', game);
const reset = document.querySelector('.reset').addEventListener('click', resetGame);
const clickedRock = document.querySelector('#clicked-r');
const clickedPaper = document.querySelector('#clicked-p');
const clickedScissors = document.querySelector('#clicked-s');
const compGuess_R = document.querySelector('#compguess-r');
const compGuess_P = document.querySelector('#compguess-p');
const compGuess_S = document.querySelector('#compguess-s');
const winMsg = document.querySelector('.winner');
const winContainer = document.querySelector('.win-container');
const compScore = document.querySelector('.comp-score');
const playerScore = document.querySelector('.player-score');
const roundsValue = document.querySelector('#input-value');
const popupContainer = document.querySelector('.popup-container');
const winnerCall = document.querySelector('.winner-call');
const prize = document.querySelector('.prize');

/*Sound*/
function play() {
    let audio = document.getElementById("audio");
    audio.play();
}

function pause() {
    let audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0;
}


/* Radio Buttons */
function handleChange(src) {
    alert(src.value);
}


/* Before play*/
let info = alert("Please enter your Gamertag before the game starts!");
let gamerName = prompt("Gamertag:", "");

   

function game(e) {
    const computerSelection = computerPlay();
    function computerPlay() {
        let computerGuess = ['rock', 'paper', 'scissors'];
        return computerGuess[Math.floor(Math.random() * 3)];
    }
    playRound(computerSelection, e);
    actionDisplay(computerSelection, e);
    gameEnd();
}

/* Match */
function playRound(computerSelection, e) {
    if (computerSelection === e.target.id) {
        winMsg.innerHTML = 'Draw';
        winMsg.style.color = 'black';
        return;
    }
    if (computerSelection === 'rock') {
        if (e.target.id === 'paper') {
            winMsg.innerHTML = 'You Win 🤘🏻';
            winMsg.style.color = 'rgb(46, 206, 6)';
            playerScore.innerHTML++;
            return;
        } else
            winMsg.innerHTML = 'You Lose 💩';
        winMsg.style.color = 'red';
        compScore.innerHTML++;
        return;
    }
    if (computerSelection === 'paper') {
        if (e.target.id === 'rock') {
            winMsg.innerHTML = 'You Lose 💩';
            winMsg.style.color = 'red';
            compScore.innerHTML++;
            return;
        } else
            winMsg.innerHTML = 'You Win 🤘🏻';
        winMsg.style.color = 'rgb(46, 206, 6)';
        playerScore.innerHTML++;
        return;
    }
    if (computerSelection === 'scissors') {
        if (e.target.id === 'rock') {
            winMsg.innerHTML = 'You Win  🤘🏻';
            winMsg.style.color = 'rgb(46, 206, 6)';
            playerScore.innerHTML++;
            return;
        } else
            winMsg.innerHTML = 'You Lose 💩';
        winMsg.style.color = 'red';
        compScore.innerHTML++;
        return;
    }
}

/* Comp and User Action Display Selection  */
function actionDisplay(computerSelection, e) {
    if (e.target.id == 'rock') {
        clickedRock.style.display = 'block';
    } else clickedRock.style.display = 'none';

    if (e.target.id == 'paper') {
        clickedPaper.style.display = 'block';
    } else clickedPaper.style.display = 'none';

    if (e.target.id == 'scissors') {
        clickedScissors.style.display = 'block';
    } else clickedScissors.style.display = 'none';

    if (computerSelection == 'rock') {
        compGuess_R.style.display = 'block';
    } else compGuess_R.style.display = 'none';

    if (computerSelection == 'paper') {
        compGuess_P.style.display = 'block';
    } else compGuess_P.style.display = 'none';

    if (computerSelection == 'scissors') {
        compGuess_S.style.display = 'block';
    } else compGuess_S.style.display = 'none';
}

function gameEnd() {
    if ((Number(compScore.innerHTML) >= Number(roundsValue.value)) || (Number(playerScore.innerHTML) >= Number(roundsValue.value) || (Number(compScore.innerHTML)) >= 100 || (Number(playerScore.innerHTML)) >= 100)) {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        popupContainer.style.display = 'block';
        if (Number(compScore.innerHTML) > Number(playerScore.innerHTML)) {
            winnerCall.innerHTML = 'You Lose 💩';
            winnerCall.style.color = 'red';
        }
        if (Number(playerScore.innerHTML) > Number(compScore.innerHTML)) {
            winnerCall.innerHTML = 'You Win  🤘🏻';
            winnerCall.style.color = 'rgb(46, 206, 6)';
            prize.style.display = 'block';
        }
    }
}

/* Play Again Button */
function resetGame() { 
    playerScore.innerHTML = '0';
    compScore.innerHTML = '0';
    winMsg.innerHTML = '-----';
    winMsg.style.color = 'black';
    clickedRock.style.display = 'none';
    clickedPaper.style.display = 'none';
    clickedScissors.style.display = 'none';
    compGuess_R.style.display = 'none';
    compGuess_P.style.display = 'none';
    compGuess_S.style.display = 'none';
    popupContainer.style.display = 'none';
    prize.style.display = 'none';
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

