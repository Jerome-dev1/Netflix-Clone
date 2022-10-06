// RapidApi
const getWeatherData = (city) => {

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'de504c94femsh3a2d8b3a77e73fep15ffacjsn5b3686a92d90',
			'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
		}
	};
	
	
	return fetch(`https://aerisweather1.p.rapidapi.com/observations/${city}`, options)
		.then(response => response.json())
		.then(data => data)
		.catch(err => console.error(err));
}

const searchCity = async () => {
	const city = document.getElementById("city-input").value;
	console.log(city)
	const data = await getWeatherData(city)
	showWeatherData(data)
}

const showWeatherData = (weatherData) => {
	console.log(weatherData, 'hello')
	console.log(weatherData.response.ob.tempC)
	document.getElementById("temp").innerText = weatherData.response.ob.tempC
	document.getElementById("city-name").innerText = weatherData.response.place.name
	document.getElementById("weather-type").innerText = weatherData.response.ob.weather
	document.getElementById("min-temp").innerText = weatherData.response.ob.tempF
	document.getElementById("max-temp").innerText = weatherData.response.ob.humidity
}


	

