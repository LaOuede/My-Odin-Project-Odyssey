function createPlayer(name, marker) {
	const score = 0;
	return { name, marker, score };
}

// const player1 = createPlayer(prompt('Player One:', 'John'), 'X');
// const player2 = createPlayer(prompt('Player Two:', 'Jim'), 'O');

const gameboard = (function() {
	
	const board = Array(9).fill('');

	const getBoard = () => board;

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

	return { getBoard, displayGameboard };
})();

const gameController = (function() {
	let activePlayer = null;
	let tickedCase = null;
	const players = [createPlayer('John', 'X'), createPlayer('Jim', 'O')];
	const winCon = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal winCon
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical winCon
		[0, 4, 8], [2, 4, 6] // diagonal winCon
	]

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
		tickedCase = parseInt(id);
		if (!gameboard.getBoard[id]) {
			gameboard.getBoard[id] = marker;
		} else {
			// alert('This case is already marked');
			console.log('This case is already marked');
		}
	};

	function playGame() {
		
		do {
			switchPlayer();
			tickCase(prompt(`${activePlayer.name}, which case do you want to tick?`), activePlayer.marker);
			gameboard.displayGameboard();
		} while (!checkWinCondition(tickedCase, activePlayer.marker));
	}
	
	return { playGame, tickedCase };
})();

gameController.playGame();
