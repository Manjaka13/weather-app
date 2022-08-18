import React, { Fragment } from "react";
import WeatherData from "./WeatherData";
import WeatherStatus from "./WeatherStatus";

/*
	Home page
*/

const Weather = () => (
	<Fragment>
		<div className="weather">
			<WeatherStatus />
			<WeatherData />
		</div>
	</Fragment>
);

export default Weather;
