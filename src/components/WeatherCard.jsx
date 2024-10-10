
function WeatherCard({ name, value, secondary }) {
	return (
		<div className="card flex-col p-6 px-4 lg:px-12">
			<h3 className="text-lg lg:text-xl pb-4 text-gray-200">{name}</h3>
			<div className="flex">
				<p className="text-lg lg:text-2xl text-center">{value}</p>
				{secondary && 
					<div className="ml-2" style={{ transform: `rotate(${secondary})` }}>{'-->'}</div>
				}
			</div>
		</div>
	)
}

export default WeatherCard;