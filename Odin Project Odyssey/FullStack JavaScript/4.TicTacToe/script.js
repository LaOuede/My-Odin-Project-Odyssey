function createPlayer(name, marker) {
	const score = 0;
	const infos = () => {
		return `${name}`;
	}

	return { name, marker, score, infos };
}

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

	let players = '';

	const addPlayers = (player1, player2) => {
		return [createPlayer(player1, 'X'), createPlayer(player2, 'O')];
	};

	const winCon = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal winCon
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical winCon
		[0, 4, 8], [2, 4, 6] // diagonal winCon
	]

	const getActivePlayer = () => activePlayer;

	const switchPlayer = () => {
		activePlayer = (activePlayer === gameController.players[0]) ? gameController.players[1] : gameController.players[0];
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
			console.log(gameboard.getBoard[id]);
			console.log('This case is already marked');
			return false;
		}
	};

	function playGame() {
		console.log(gameController.players);
		const infos = document.querySelector('.infos');
		infos.innerHTML = '';
		const playersInfos = document.createElement('div');
		playersInfos.innerHTML = `<b>Player X:</b><br>${gameController.players[0].infos()}<br><br><b>Player O:</b><br>${gameController.players[1].infos()}`;
		infos.appendChild(playersInfos);
		boxes.classList.remove('no-click');
	}

	function playRound(id, box) {
		switchPlayer();
		console.log(activePlayer);
		if (tickCase(id, activePlayer.marker)) {
			box.innerHTML = gameController.getActivePlayer().marker;
			gameboard.displayGameboard();
			if (checkWinCondition(tickedCase, activePlayer.marker)) {
				boxes.classList.add('no-click');
				return false;
			}
			return true;
		}
		switchPlayer();
		return true;
	};

	const endGame = () => {
		const infos = document.querySelector('.infos');
		const winner = document.createElement('div');
		winner.innerHTML = `🏆<br>The winner is ${activePlayer.name}`;
		winner.classList.add('winner-announcement', 'blink');
		infos.appendChild(winner);
		const newGame = document.querySelector('#new');
		console.log(`The winner is ${activePlayer.name}`);
		newGame.textContent = 'New Game';

		setTimeout(() => {
			winner.classList.remove('blink');
		}, 3000);
	};
	
	return { addPlayers, playGame, tickedCase, playRound, getActivePlayer, endGame };
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

document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('click', (event) => {
		if (event.target.id === 'new') {
			box.forEach((box) => {
				box.innerHTML = '';
			});
			document.querySelectorAll('body > *:not(#new)').forEach(element => {
				element.classList.remove('blur-background');
			});
			event.target.textContent = 'Reset Game';
			boxes.classList.remove('no-click');
			gameboard.resetBoard();
			gameController.playGame();
		};
	});
})

const form = document.querySelector('#players');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name1 = document.querySelector('#name1').value;
	const name2 = document.querySelector('#name2').value;

	gameController.players = gameController.addPlayers(name1, name2);
	console.log(gameController.players[0]);

	form.reset();
	form.style.visibility = 'hidden';
	gameController.playGame();
});

