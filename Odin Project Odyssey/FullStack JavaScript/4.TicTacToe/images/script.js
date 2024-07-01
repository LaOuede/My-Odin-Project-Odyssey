function createPlayer(name, marker, color) {
	const score = 0;
	return { name, marker, color, score };
}

// const player1 = createPlayer(prompt('Player One:', 'John'), 'X');
// const player2 = createPlayer(prompt('Player Two:', 'Jim'), 'O');

const gameboard = (function() {
	
	const board = Array(9).fill('');

	const getBoard = () => board;

	const resetBoard = () => {
		for (let i = 0; i < 9; i++) {
			getBoard[i] = '';
		}
	};

	const displayGameboard = () => {
		let board = []
		for (let i = 0; i < 9; i += 3) {
			let line = [];
			for (let j = 0; j < 3; j++) {
				if (!gameboard.getBoard[j + i]) {
					line.push('-');
				} else {
					line.push(gameboard.getBoard[j + i]);
				}
			}
			board.push(line);
		}
		console.log(gameboard.getBoard());
	};

	return { getBoard, displayGameboard, resetBoard };
})();

const gameController = (function() {
	let activePlayer = null;
	let tickedCase = null;
	const players = [createPlayer('John', 'X', 'blue'), createPlayer('Jim', 'O', 'orange')];
	const winCon = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal winCon
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical winCon
		[0, 4, 8], [2, 4, 6] // diagonal winCon
	]

	const getActivePlayer = () => activePlayer;

	const switchPlayer = () => {
		activePlayer = (activePlayer === players[0]) ? players[1] : players[0];
	}

	const checkWinCondition = (id, marker) => {
		for (let element in winCon) {
			if (winCon[element].includes(id)) {
				console.log(winCon[element], 'OK');
				for (let i = 0; i < 3; i++) {
					console.log('Content', gameboard.getBoard[winCon[element][i]]);
					if (gameboard.getBoard[winCon[element][i]] != marker) {
						break;
					}
					if (i === 2) {
						console.log('You win');
						return true;
					}
				}
			}
		}
		return false;
	};

	const tickCase = (id, marker) => {
		console.log('tickCase:', id, marker);
		tickedCase = parseInt(id);
		if (!gameboard.getBoard[id]) {
			gameboard.getBoard[id] = marker;
			console.log(gameboard.getBoard[id]);
			return true;
		} else {
			// alert('This case is already marked');
			console.log(gameboard.getBoard[id]);
			console.log('This case is already marked');
			return false;
		}
	};

	function playGame() {
		console.log(players);

	}

	function playRound(id, box) {
		switchPlayer();
		console.log(activePlayer);
		if (tickCase(id, activePlayer.marker)) {
			box.style.backgroundColor = gameController.getActivePlayer().color;

			gameboard.displayGameboard();
			if (checkWinCondition(tickedCase, activePlayer.marker)) {
				boxes.classList.add('no-click');
				return false;
			}
		}
		return true;
	};

	const endGame = () => {
		console.log(`The winner is ${activePlayer.name}`);
		const newGame = document.querySelector('#new');
		newGame.style.visibility = 'visible';
	};
	
	return { playGame, tickedCase, playRound, getActivePlayer, endGame };
})();

const body = document.querySelector('body');
const boxes = document.querySelector('.grid');
const box = document.querySelectorAll('.box');
const btnNewG = document.querySelectorAll('button');

box.forEach((box) => {
	box.addEventListener('click', (event) => {
		console.log(boxes.classList);
		if (!(boxes.classList.contains('no-click'))) {
			console.log('Box:', event.target.id);
			gameController.tickedCase = event.target.id;
			console.log(gameController.tickedCase);
			if (!gameController.playRound(event.target.id, event.target)) {
				gameController.endGame();
			}
		}
	})
})

document.addEventListener('DOMContentLoaded', (event) => {
	document.addEventListener('click', (event) => {
		if (event.target.id === 'new') {
			box.forEach((box) => {
				box.style.backgroundColor = 'white';
			});
			event.target.style.visibility = 'hidden';
			boxes.classList.remove('no-click');
			gameboard.resetBoard();
			gameController.playGame();
		};
	});
})

gameController.playGame();
