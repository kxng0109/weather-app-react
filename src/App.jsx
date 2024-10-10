import { useEffect, useState } from "react";
import IntroPage from "./components/IntroPage";
import Weather from "./components/Weather";
import { key } from "./key";

function App() {
	const [haveUserLocation, setHaveUserLocation] = useState(false);
	const [weatherInfo, setWeatherInfo] = useState();
	const [latLon, setLatLon] = useState();
	const [airPollotionInfo, setAirPollutionInfo] = useState();

	const API_KEY = key;

	const handleUserInput = input => {
		setLatLon(input);
		setHaveUserLocation(true);
	}

	useEffect(() => {
		if (haveUserLocation) {
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}&units=metric`;
			fetch(url)
				.then(res => res.json())
				.then(data => setWeatherInfo(data))
		
			const airPollutionURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`;
			fetch(airPollutionURL)
				.then(res => res.json())
				.then(data => setAirPollutionInfo(data))
		}
	}, [haveUserLocation])

	return (
		<div className="app-container">
			{!haveUserLocation && 
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
					airPollutionComponents={airPollotionInfo.list[0].components}
					aqi={airPollotionInfo.list[0].main.aqi}
					everything={weatherInfo} 
				/>
			}
		</div>
	)
}

export default App;
