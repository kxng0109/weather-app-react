
function IntroPage({ getLocation, API_KEY }) {
	const handleClick = () => {
		const userInput = document.querySelector('.location_input_field').value;
		if (userInput === '') return;

		const getLatLon = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${API_KEY}`
		fetch(getLatLon)
			.then(res => res.json())
			.then(data => getLocation({ lat: data[0].lat, lon: data[0].lon }))
	}

	const handleLocationFetch = () => {
		const success = position => {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;
			getLocation({ lat: lat, lon: lon })
		}

		const error = () => alert("Can't get your location.");
		
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			alert("Couldn't access your location. Your browser might not support it.");
		}
	}

	const handleKeyPress = e => {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleClick();
		}
	}

	return (
		<div>
			<input type="text" className="location_input_field" placeholder="Enter a city name, state code or country code" onKeyUp={e => handleKeyPress(e)} />
			<button onClick={handleClick} type="submit">Search</button>
			<button onClick={handleLocationFetch}>Get location automatically</button>
		</div>
	)
}

export default IntroPage;