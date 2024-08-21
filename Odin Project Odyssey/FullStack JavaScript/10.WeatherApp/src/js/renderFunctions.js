const dataWeather = (function () {
	let location = '';
	let date = '';
	let temp = '';
	let humidity = '';
	let description1 = '';
	let description2 = '';
	let time = '';
	let conditions = '';
	let windspeed = '';

	const getInfos = (data) => {
		location = data.resolvedAddress;
		time = data.currentConditions.datetime;
		date = data.days[0].datetime;
		conditions = data.currentConditions.conditions;
		temp = data.currentConditions.temp;
		windspeed = data.currentConditions.windspeed;
		humidity = data.currentConditions.humidity;
		description1 = data.description;
		description2 = data.days[0].description;
	};
	
	const displayForecast = () => {
		console.log(location);
		console.log(date);
		console.log(time);
		console.log(conditions);
		console.log(temp);
		console.log(windspeed);
		console.log(humidity);
		console.log(description1);
		console.log(description2);
	};

	return { getInfos, displayForecast };
}) ();

export default dataWeather;
