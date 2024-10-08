import { useEffect, useState } from "react";
import IntroPage from "./components/IntroPage";
import Weather from "./components/Weather";
import { key } from "./key";

console.clear();
function App() {
	// const [hasSubmittedLocation, setHasSubmittedLocation] = useState(false);
	// const [weatherInfo, setWeatherInfo] = useState({});
	// const [latLon, setLatLon] = useState({});
	const [hasSubmittedLocation, setHasSubmittedLocation] = useState(true);
	const [weatherInfo, setWeatherInfo] = useState();
	const [latLon, setLatLon] = useState({
		"lat": 51.5073219,
		"lon": -0.1276474
	});

	const API_KEY = key;

	const handleUserInput = input => {
		setLatLon(input);
		setHasSubmittedLocation(true);
	}

	useEffect(() => {
		if (hasSubmittedLocation) {
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}&units=metric`;
			fetch(url)
				.then(res => res.json())
				.then(data => setWeatherInfo(data))
		}
	}, [hasSubmittedLocation])

	return (
		<div className="app-container">
			{!hasSubmittedLocation && 
				<IntroPage 
					API_KEY={API_KEY} 
					getLocation={info => handleUserInput({ ...info })} 
				/>
			}
			
			{weatherInfo && 
				<Weather 
					main={weatherInfo.main} 
					weather={weatherInfo.weather[0]} 
					wind={weatherInfo.wind} 
					locationName={weatherInfo.name} 
					locationAbbreviation={weatherInfo.sys.country} 
					clouds={weatherInfo.clouds.all} 
					everything={weatherInfo} 
				/>
			}
		</div>
	)
}

export default App;
