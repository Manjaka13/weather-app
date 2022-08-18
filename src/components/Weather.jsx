import React, { Fragment } from "react";
import WeatherStatus from "./WeatherStatus";

/*
	Home page
*/

const Weather = () => (
	<Fragment>
		<div className="weather">
			<WeatherStatus />
			<div className="weather__data">
			</div>
		</div>
	</Fragment>
);

export default Weather;
