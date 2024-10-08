
function WeatherCard({ name, value, secondary }) {
	return (
		<div className="card flex flex-col p-6 px-12">
			<h3 className="text-2xl pb-4 text-gray-600">{name}</h3>
			<p className="text-3xl">{value}</p>
		</div>
	)
}

export default WeatherCard;