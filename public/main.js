const getWeather = async () => {
	let urlString
	let test = document.getElementById('weather-input').value
	console.log(test)
	let x = parseInt(test)
	console.log(x)
	if (isNaN(x)) {
		console.log('made it')
		urlString =
			'https://api.openweathermap.org/data/2.5/weather?q=' +
			test +
			'&units=imperial&APPID=4530c55b5cfdc2b0beae825af0524c52'

		console.log('url: ' + urlString)
	} else if (Number.isInteger(x)) {
		console.log('number is')
		urlString =
			'https://api.openweathermap.org/data/2.5/weather?zip=' +
			test +
			'&,us&units=imperial&APPID=4530c55b5cfdc2b0beae825af0524c52'
	}
	console.log('going to API')
	document.querySelector('.weather').textContent = ''
	let response = await fetch(urlString)
	console.log('back from API')
	console.log(response)
	weatherData = await response.json()
	displayData(weatherData)
}

const displayData = (weatherData) => {
	console.log(weatherData.weather[0].main)
	document.querySelector('.weather').textContent =
		weatherData.weather[0].description + ' with a temperature of: ' + weatherData.main.temp + ' degrees F'
}

document.querySelector('.get-weather').addEventListener('click', getWeather)
