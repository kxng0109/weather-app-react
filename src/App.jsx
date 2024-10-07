import { useEffect, useState } from "react";
import IntroPage from "./components/IntroPage";
import { key } from "./key";

function App() {
	const [hasSubmittedLocation, setHasSubmittedLocation] = useState(false);
	const [latLon, setLatLon] = useState({});

	const API_KEY = key;

	const handleUserInput = input => {
		console.log(input)
		setLatLon(input);
		setHasSubmittedLocation(true);
	}

	useEffect(() => {
		if (hasSubmittedLocation) {
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}&units=metric`;
			fetch(url)
				.then(res => res.json())
				.then(data => console.log(data))
		}
	}, [hasSubmittedLocation])

	return (
		<div className="container">
			{!hasSubmittedLocation && <IntroPage API_KEY={API_KEY} getLocation={info => handleUserInput({ ...info })} />}
		</div>
	)
}

export default App;
