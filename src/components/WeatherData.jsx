import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Social from "./Social";
import { useWeather } from "../hooks/useWeather";
import Loading from "./Loading";

/*
	Displays weather data
*/

const WeatherData = () => {
	const { loading, weather } = useWeather();

	console.log(weather)

	return (
		<div className="weather-data">
			{loading && <Loading />}
			{!loading && <div className="weather-data__box">
				<form className="weather-data__location">
					<input className="input" type="text" placeholder="Your current location" />
					<button className="search" type="submit">
						<Icon icon={["fas", "search"]} />
					</button>
					<Icon className="location-icon" icon={["fas", "map-marker-alt"]} />
				</form>

				<div className="weather-data__group">
					{/* WIND */}
					<div className="weather-data__data">
						<h2 className="title">Wind</h2>
						<div className="list">
							<div className="data" title="Wind speed">
								<Icon className="icon" icon={["fas", "wind"]} />
								<p className="value">{weather?.wind?.speed} m/sec</p>
								<p className="caption">Speed</p>
							</div>
							<div className="data" title="Gust">
								<Icon className="icon" icon={["fas", "gauge-high"]} />
								<p className="value">{weather?.wind?.gust} m/sec</p>
								<p className="caption">Gust</p>
							</div>
							<div className="data" title="Wind direction">
								<Icon className="icon" icon={["fas", "compass"]} />
								<p className="value">{weather?.wind?.deg} °</p>
								<p className="caption">Direction</p>
							</div>
						</div>
					</div>

					{/* ATMOSPHERE */}
					<div className="weather-data__data">
						<h2 className="title">Atmosphere</h2>
						<div className="list">
							<div className="data" title="Atmospheric pressure">
								<Icon className="icon" icon={["fas", "gauge-simple-high"]} />
								<p className="value">{weather?.main?.pressure} hPA</p>
								<p className="caption">Pressure</p>
							</div>
							<div className="data" title="Humidity">
								<Icon className="icon" icon={["fas", "droplet"]} />
								<p className="value">{weather?.main?.humidity} %</p>
								<p className="caption">Humidity</p>
							</div>
							<div className="data" title="Visibility">
								<Icon className="icon" icon={["fas", "eye"]} />
								<p className="value">{Math.floor(weather?.visibility / 1000)} km</p>
								<p className="caption">Visibility</p>
							</div>
						</div>
					</div>
				</div>

				<div className="weather-data__separator"></div>
				<Social />
			</div>}
		</div>
	);
};

export default WeatherData;
