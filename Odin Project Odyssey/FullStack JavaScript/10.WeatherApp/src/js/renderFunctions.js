const dataWeather = (function () {
	let location = '';
	let temp = '';
	let humidity = '';
	let description = '';

	const getInfos = (data) => {
		location = data.resolvedAddress;
		temp = data.currentConditions.temp;
		humidity = data.currentConditions.humidity;
		description = data.description;
	};
	
	const displayForecast = () => {
		console.log(location);
		console.log(temp);
		console.log(humidity);
		console.log(description);
	};

	return { getInfos, displayForecast };
}) ();

export default dataWeather;
