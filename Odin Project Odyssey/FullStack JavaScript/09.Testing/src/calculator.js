const calculator = (function () {
	const sum = (nb1, nb2) => {
		return nb1 + nb2;
	};

	const substract = (nb1, nb2) => {
		return nb1 - nb2;
	}

	const divide = (nb1, nb2) => {
		return nb1 / nb2;
	}

	const multiply = (nb1, nb2) => {
		return nb1 * nb2;
	}

	return { sum, substract, divide, multiply };
}) ();

export default calculator;