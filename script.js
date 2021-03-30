'use strict';

//Math.trunc get whole number
let secretNumber = generateRandomNumber();
let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

document.querySelector('.again').addEventListener('click',
	() => newGame());


//function inside eventListener is what will happen when button is clicked
document.querySelector('.check').addEventListener('click',
	function() {
		if (score > 1) {
			//we get string from box
			const guess = Number(document.querySelector('.guess').value);

			//if guess is empty
			if (!guess) {
				setMessage('No number!');
			} else if (guess === secretNumber) {
				setMessage('Correct Number!');
				document.querySelector('.number').textContent = secretNumber;
				if (score > highScore) {
					highScore = score;
					document.querySelector('.highscore').textContent = score;
				}
				document.querySelector('body').style.backgroundColor = '#60b347';
				document.querySelector('.number').style.width = '30rem';
			} else {
				setMessage(guess > secretNumber ?
					'Number is too height' : 'Number is too small');
				score--;
				document.querySelector('.score').textContent = score;
			}
		} else {
			gameOver();
		}
	});
function newGame() {
	secretNumber = generateRandomNumber();
	score = 20;
	setMessage('Start guessing...');
	document.querySelector('.guess').value = '';
	document.querySelector('.score').textContent = score;
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.number').textContent = '?';
}

function gameOver() {
	document.querySelector('.score').textContent = 0;
	setMessage('Game Over!');
	document.querySelector('body').style.backgroundColor = 'red';
	document.querySelector('.number').textContent = secretNumber;
}

function setMessage(message) {
	document.querySelector('.message').textContent = message;
}

function generateRandomNumber() {
	return Math.trunc(Math.random() * 20) + 1;
}
