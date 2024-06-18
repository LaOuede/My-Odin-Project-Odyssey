// global variables
let operator = '';
let nb1 = '';
let nb2 = '';
let solution = 0;
let dotState = false;

operation = {
	'+' : 1,
	'-' : 2,
	'×' : 3,
	'/' : 4
};

const buttons = document.querySelectorAll('button');
const numbersBtn = document.querySelectorAll('.numbers');
const operatorsBtn = document.querySelectorAll('.operators');
const display = document.querySelector('.display');
const dotBtn = document.querySelector('.dot');
const backBtn = document.querySelector('.back');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');


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


// Events Listener
numbersBtn.forEach((btn) => {
	btn.addEventListener('click', (event) => {
		const toDisplay = document.createElement('p');
		toDisplay.className = 'displayed';
		if (operator === '') {
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
		} else {
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
		}
	});
});

operatorsBtn.forEach((btn) => {
	btn.addEventListener('click', (event) => {
		const toDisplay = document.createElement('p');
		toDisplay.className = 'displayed';

		if (nb1 != '') {
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
		}
	});
});

dotBtn.addEventListener('click', (event) => {
	const toDisplay = document.createElement('p');
	toDisplay.className = 'displayed';

	if (dotState === false) {
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
	}
});

backBtn.addEventListener('click', () => {
	const toDisplay = document.createElement('p');
	toDisplay.className = 'displayed';

	display.innerHTML = '';
	if (operator === '') {
		nb1 = nb1.slice(0, nb1.length - 1);
		if (nb1 === '') {
			nb1 = '0';
		}
		toDisplay.textContent = nb1;
	} else {
		nb2 = nb2.slice(0, nb2.length - 1);
		if (nb2 === '') {
			nb2 = '0';
		}
		toDisplay.textContent = nb2;
	}
	display.appendChild(toDisplay);
});

equalBtn.addEventListener('click', () => {
	const toDisplay = document.createElement('p');
	toDisplay.className = 'displayed';

	if (nb1 != '' && nb2 != '' && operator != '') {
		display.innerHTML = '';
		solution = operate(operator, parseFloat(nb1), parseFloat(nb2));
		toDisplay.textContent = Number.isInteger(solution) ? solution : solution.toFixed(2);
		display.appendChild(toDisplay);
		operator = '';
		nb1 = '';
		nb2 = '';
		dotState = false;
	}
});

clearBtn.addEventListener('click', () => {
	const toDisplay = document.createElement('p');
	toDisplay.className = 'displayed';

	display.innerHTML = '';
	operator = '';
	nb1 = '';
	nb2 = '';
	dotState = false;
	toDisplay.textContent = '0';
	display.appendChild(toDisplay);
});
