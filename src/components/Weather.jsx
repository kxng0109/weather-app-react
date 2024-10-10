import AqiGases from "./AqiGases";
import WeatherCard from "./WeatherCard";

function Weather({ main, weather, wind, locationName, locationAbbreviation, clouds, airPollutionComponents, aqi }) {
	let polutionComponentsValuesArray = Object.values(airPollutionComponents);
	let polutionComponentsKeysArray = Object.keys(airPollutionComponents);

	const useAQIValue = aqi => {
		switch (aqi) {
			case 1:
				return { color: '#06FF00', text: `Good!` }
			case 2:
				return { color: '#78FF00', text: `Fair` }
			case 3:
				return { color: '#FFFF00', text: `Moderate` }
			case 4:
				return { color: '#FFC000', text: "Poor" }
			case 5:
				return { color: '#FF4B4B', text: "Very Poor!" }
		}
	}

	return (
		<div 
			id="weather-info-container" 
			onLoad={() => document.querySelector('#weather-info-container').classList.add(`${weather.description.toLowerCase().replace(/\s+/g, '-')}`)}
		>
			<p id="location-name">{locationName.toUpperCase()}, {locationAbbreviation}</p>

			<div className="card py-10 px-14 my-12">
				<img 
					src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} 
					className="w-32 lg:w-[unset]" 
					alt="Weather Icon" 
				/>
				<div id="temp-weather-description">
					<h1 className="flex">
						{main.temp.toFixed(1)}
						<span className="text-xl lg:text-3xl">°C</span>
					</h1>
					<p>{weather.description}</p>
				</div>
			</div>
			<div id="card-container">
				<WeatherCard name='Feels like' value={`${main.feels_like.toFixed(1)}°C`} />
				<WeatherCard name='Humidity' value={`${main.humidity}%`} />
				<WeatherCard name='Pressure' value={`${main.pressure}hPa`} />
				<WeatherCard name='Wind' value={`${wind.speed}m/s`} secondary={`${wind.deg - 90}deg`} />
				<WeatherCard name='Cloudiness' value={`${clouds}% cloudy`} />
				<WeatherCard name='Max | Min' value={`${main.temp_max.toFixed(1)} | ${main.temp_min.toFixed(1)}`} />
				<div className="card">
					<h3 className="text-md text-gray-300">Air Pollution</h3>
					<p className="text-3xl lg:text-4xl text-center py-4" style={{ color: useAQIValue(aqi).color }}>{aqi} <span>{useAQIValue(aqi).text}</span></p>
					<div id="pollution-components-container">
						{polutionComponentsKeysArray.map((gas, index) => {
							return <AqiGases key={index} gases={gas} value={polutionComponentsValuesArray[index]} />
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Weather;