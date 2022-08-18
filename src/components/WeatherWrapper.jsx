import React from "react";
import WeatherData from "./WeatherData";
import WeatherStatus from "./WeatherStatus";

/*
    Wrapper
*/

const WeatherWrapper = () => {
	return (
		<div className="weather">
			<WeatherStatus />
			<WeatherData />
		</div>
	);
};

export default WeatherWrapper;
