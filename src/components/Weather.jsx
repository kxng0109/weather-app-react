import { space } from "postcss/lib/list";
import WeatherCard from "./WeatherCard";

console.clear();
// {
//     "weather": 
//         {
//             "id": 803,
//             "main": "Clouds",
//             "description": "broken clouds",
//             "icon": "04d"
//         },
//     "main": {
//         "temp": 17.36,
//         "feels_like": 17.16,
//         "temp_min": 15.88,
//         "temp_max": 18.52,
//         "pressure": 993,
//         "humidity": 77,
//         "sea_level": 993,
//         "grnd_level": 989
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 5.14,
//         "deg": 200
//     },
//     "name": "London"
// }

function Weather({ main, weather, wind, locationName, locationAbbreviation, clouds, everything }) {
	return (
		<div id="weather-info-container" className="bg-blue-300 h-screen w-full p-6 flex flex-col items-center justify-center">
			<p className="text-5xl text-gray-700">{locationName}, {locationAbbreviation}</p>

			<div className="card py-10 px-14 my-12">
				<img src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt="Weather Icon" />
				<div className="text-5xl flex flex-col gap-8 p-8">
					<h1 className="flex">{main.temp.toFixed(1)}<span className="text-3xl">°C</span></h1>
					<p>{weather.description}</p>					
				</div>
			</div>
			<div id="card-container">
				{/*<div>Feels like: {main.feels_like}°C</div>*/}
				<WeatherCard name='Feels like' value={`${main.feels_like.toFixed(1)}°C`} />
				{/*<div>Humidity: {main.humidity}</div>*/}
				<WeatherCard name='Humidity' value={`${main.humidity}%`} />
				{/*<div>Pressure: {main.pressure}</div>*/}
				<WeatherCard name='Pressure' value={`${main.pressure}hPa`} />
				{/*<div>Wind speed: {wind.speed}. Direction: {wind.deg}</div>*/}
				<WeatherCard name='Wind' value={`${wind.speed}m/s ${wind.deg}°`} />
				<WeatherCard name='Cloudiness' value={`${clouds}% cloudy`} />
				<WeatherCard name='Max | Min' value={`${main.temp_max.toFixed(1)}°C | ${main.temp_min.toFixed(1)}°C`} />
			</div>

		</div>
	)
}

export default Weather;