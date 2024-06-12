const array = [1, 4, 5, 8, 54, 42, 89];

function sumOfTripledEvens(array) {
	return array
		.filter((num) => num % 2 === 0)
		.map((num) => num * 3)
		.reduce((acc, curr) => acc + curr);
}

  console.log(sumOfTripledEvens(array));