
function AqiGases({ gases, value }) {
	return (
		<div className="gases-container">
			<p className="text-xl">{value}</p>
			<p className="gases">{gases}</p>
		</div>
	)
}

export default AqiGases;