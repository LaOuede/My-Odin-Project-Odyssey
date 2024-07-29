function calculAverage(array) {
	let sum = 0;

	for (let i = 0; i < array.length; i++) {
	sum += array[i];
	}

	return sum / array.length;
}

function analyzeArray(array) {
	const object = {
		average: calculAverage(array),
		min: Math.min(...array),
		max: Math.max(...array),
		length: array.length 
	};

	return object;
}

export { analyzeArray, calculAverage };