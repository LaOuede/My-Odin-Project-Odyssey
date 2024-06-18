// enum
operation = {
	'+' : 1,
	'-' : 2,
	'×' : 3,
	'/' : 4
};

// basic operations
function add(nb1, nb2) {
	return nb1 + nb2;
}

function substract(nb1, nb2) {
	return nb1 - nb2;
}

function multiply(nb1, nb2) {
	if (nb1 === 0 || nb2 === 0) {
		return 0;
	}
	return nb1 * nb2;
}

function divide(nb1, nb2) {
	if (nb1 === 0 || nb2 === 0) {
		return 'You can\'t divide by 0 !';
	}
	return nb1 / nb2;
}

// global variables
let operator = '';
let nb1 = '';
let nb2 = '';
let solution = 0;
let dotState = false;
let zeroState = false;

// operate function
function operate(operator, nb1, nb2) {
	switch(operator) {
		case '+' :
			return add(nb1, nb2);
		case '-' :
			return substract(nb1, nb2);
		case '×' :
			return multiply(nb1, nb2);
		case '/' :
			return divide(nb1, nb2);
	}
};

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach((btn) => {
	btn.addEventListener('click', (event) => {
		const toDisplay = document.createElement('p');
		toDisplay.className = 'displayed';
		if (event.target.className === 'numbers' && operator === '') {
			if (nb1 === '0' && event.target.textContent != '.') {
				display.innerHTML = '';
				nb1 = event.target.textContent;
				toDisplay.textContent = nb1;
				display.appendChild(toDisplay);
				return;
			}
			display.innerHTML = '';
			nb1 += event.target.textContent;
			toDisplay.textContent = nb1;
			display.appendChild(toDisplay);
			console.log(nb1);
		} else if (event.target.className === 'numbers' && operator != '') {
			if (nb2 === '0' && event.target.textContent != '.') {
				display.innerHTML = '';
				nb2 = event.target.textContent;
				toDisplay.textContent = nb2;
				display.appendChild(toDisplay);
				return;
			}
			display.innerHTML = '';
			nb2 += event.target.textContent;
			toDisplay.textContent = nb2;
			display.appendChild(toDisplay);
			console.log(nb2);
		} else if (event.target.className === 'operators' && nb1 != '') {
			dotState = false;
			if (nb1 != '' && nb2 != '') {
				display.innerHTML = '';
				solution = operate(operator, parseFloat(nb1), parseFloat(nb2));
				toDisplay.textContent = Number.isInteger(solution) ? solution : solution.toFixed(2);
				nb1 = solution;
				nb2 = '';
				display.appendChild(toDisplay);
			}
			operator = event.target.textContent;
			console.log(operator);
		} else if (event.target.className === 'dot' && dotState === false) {
			display.innerHTML = '';
			dotState = true;
			if (operator === '') {
				if (nb1 === '') {
					nb1 += 0;
				}
				nb1 += event.target.textContent;
				toDisplay.textContent = nb1;
			} else {
				if (nb2 === '') {
					nb2 += 0;
				}
				nb2 += event.target.textContent;
				toDisplay.textContent = nb2;
			}
			display.appendChild(toDisplay);
		} else if (event.target.className === 'back') {
			display.innerHTML = '';
			if (operator === '') {
				nb1 = nb1.slice(0, nb1.length - 1);
				console.log(nb1);
				if (nb1 === '') {
					nb1 = '0';
				}
				toDisplay.textContent = nb1;
			} else {
				nb2 = nb2.slice(0, nb2.length - 1);
				console.log(nb2);
				if (nb2 === '') {
					nb2 = '0';
				}
				toDisplay.textContent = nb2;
			}
			display.appendChild(toDisplay);
		} else if (event.target.className === 'equal') {
			if (nb1 != '' && nb2 != '' && operator != '') {
				display.innerHTML = '';
				solution = operate(operator, parseFloat(nb1), parseFloat(nb2));
				toDisplay.textContent = solution;
				display.appendChild(toDisplay);
				operator = '';
				nb1 = '';
				nb2 = '';
				dotState = false;
			}
		} else if (event.target.className === 'clear') {
			display.innerHTML = '';
			operator = '';
			nb1 = '';
			nb2 = '';
			dotState = false;
			toDisplay.textContent = '0';
			display.appendChild(toDisplay);
		}
	});
});
