import React from "react";
import { WeatherProvider } from "../hooks/useWeather";
import WeatherWrapper from "./WeatherWrapper";

/*
	Home page
*/

const Weather = () => (
	<WeatherProvider>
		<WeatherWrapper />
	</WeatherProvider>
);

export default Weather;
