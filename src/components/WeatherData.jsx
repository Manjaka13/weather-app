import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Social from "./Social";
import { useWeather } from "../hooks/useWeather";
import Loading from "./Loading";
import { v4 as uuidv4 } from "uuid";

/*
	Displays weather data
*/

const WeatherData = () => {
	const refSuggestion = useRef(null);
	const refInput = useRef(null);
	const [suggestion, setSuggestion] = useState(null);
	const { loading, weather, cities, updateCity } = useWeather();

	// Listen to clicks outside of suggestion dropdown
	useEffect(() => {
		function handleClickOutside(event) {
			if (refSuggestion.current && !refSuggestion.current.contains(event.target)) {
				setSuggestion(null);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [refSuggestion]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!loading) {
			const value = refInput.current.value;
			let sugg = [];
			for (let i = 0; i < cities.length; i++)
				if (cities[i].match(new RegExp("^" + value, "gi"))) sugg.push(cities[i]);
			if (sugg.length > 0) setSuggestion(sugg);
			else setSuggestion([]);
		}
	};

	let mappedSuggestions = null;
	if (suggestion) {
		if (suggestion.length > 0)
			mappedSuggestions = suggestion.map((sugg) => (
				<li
					className="weather-data__suggestion-item"
					key={uuidv4()}
					onClick={() => {
						const v = sugg.split(", ")[0];
						updateCity(v);
						refInput.current.value = v;
						setSuggestion(null);
					}}
				>
					<Icon icon={["fas", "city"]} /> {sugg}
				</li>
			));
		else
			mappedSuggestions = (
				<li
					className="weather-data__suggestion-item weather-data__suggestion-item--empty"
					onClick={() => {
						refInput.current.value = "";
						setSuggestion(null);
					}}
				>
					<Icon icon={["fas", "warning"]} /> Sorry, city not found
				</li>
			);
	}

	// console.log(suggestions);

	return (
		<div className="weather-data">
			{loading && <Loading />}
			{!loading && (
				<div className="weather-data__box">
					<form className="weather-data__location" onSubmit={handleSubmit}>
						<input
							className="input"
							type="text"
							placeholder="Your current location"
							ref={refInput}
						/>
						<button className="search" type="submit">
							<Icon icon={["fas", "search"]} />
						</button>
						<Icon className="location-icon" icon={["fas", "map-marker-alt"]} />
						{suggestion && (
							<ul className="weather-data__suggestion" ref={refSuggestion}>
								{mappedSuggestions}
							</ul>
						)}
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
				</div>
			)}
		</div>
	);
};

export default WeatherData;
