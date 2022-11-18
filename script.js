'use strict';
// PLAYER 1 ELEMENTS
const playFrame1 = document.querySelector('.player-1');
const playerName1 = document.querySelector('.box1');
// PLAYER 2 ELEMENTS
const playFrame2 = document.querySelector('.player-2');
const playerName2 = document.querySelector('.box2');
const dice = document.querySelector('.dice');
const newGame = document.querySelector('.newgame');
const roll = document.querySelector('.roll');

// NAME INPUT

function init() {
	let winnerFrame = document.querySelector('.wait');
	if (winnerFrame != null) {
		winnerFrame.classList.remove('winner');
	}
	playFrame1.classList.add('play');
	playFrame1.classList.remove('wait');
	playFrame2.classList.add('wait');
	playFrame2.classList.remove('play');

	const playerScore1 = document.querySelector('.play #score');
	const playerScore2 = document.querySelector('.wait #score');
	playerScore1.textContent = 0;
	playerScore2.textContent = 0;
	const playerGameScore1 = document.querySelector('.play #game-score');
	const playerGameScore2 = document.querySelector('.wait #game-score');
	playerGameScore1.textContent = 0;
	playerGameScore2.textContent = 0;
	roll.disabled = false;
}
init();
roll.addEventListener('click', function() {
	diceROll();
});

function diceROll() {
	const diceNum = Math.floor(Math.random() * 6 + 1);
	dice.src = `images/dice${diceNum}.png`;
	updateScore(diceNum);
	changePlayer();
}

function updateScore(diceNum) {
	const playerScore = document.querySelector('.play #score');
	playerScore.textContent = diceNum;
	const playerGameScore = document.querySelector('.play #game-score');
	let currentGameScore = parseInt(playerGameScore.textContent);
	playerGameScore.textContent = currentGameScore + diceNum;
	currentGameScore = parseInt(playerGameScore.textContent);

	if (currentGameScore >= 15) {
		let winnerFrame = document.querySelector('.play');
		winnerFrame.classList.add('winner');
		roll.disabled = true;
	}
}
function changePlayer() {
	const playerPlay = document.querySelector('.play');
	const playerWait = document.querySelector('.wait');

	playerPlay.classList.remove('play');
	playerPlay.classList.add('wait');
	playerWait.classList.remove('wait');
	playerWait.classList.add('play');
}

newGame.addEventListener('click', function() {
	init();
});
