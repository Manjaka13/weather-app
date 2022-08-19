import React, { Fragment } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { useWeather } from "../hooks/useWeather";

/*
    Displays weather status
*/

function pad(val) {
    return (val < 10) ? '0' + val : val;
}

function convertTime(unixTime) {
    let dt = new Date((unixTime) * 1000);
    return `${pad(dt.getHours())}:${dt.getMinutes()}`;
}

const WeatherStatus = () => {
    const { loading, weather, city } = useWeather();
    let sunrise = weather?.sys.sunrise;
    let sunset = weather?.sys.sunset;
    if (sunrise) sunrise = convertTime(sunrise);
    if (sunset) sunset = convertTime(sunset);

    const status = weather?.weather[0].main || "Sunny";
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date(Date.now());
    let now = today.toString().split(" ");
    now = `${dayOfWeek[today.getDay()]}, ${now[2]} ${now[1]} ${now[3]}`;

    return (
        <div className="weather-status">
            <div className="weather-status__gradient">
                <div className="weather-status__top">
                    {!loading && (
                        <Fragment>
                            <div className="weather-status__sunrise">
                                <Icon className="icon" icon={["fas", "sun-plant-wilt"]} />
                                <div>
                                    <p className="caption">Sunrise</p>
                                    <p className="label"><Icon icon={["fas", "clock"]} /> {sunrise}</p>
                                </div>
                            </div>
                            <div className="weather-status__sunset">
                                <Icon className="icon" icon={["fas", "moon"]} />
                                <div>
                                    <p className="caption">Sunset</p>
                                    <p className="label"><Icon icon={["fas", "clock"]} /> {sunset}</p>
                                </div>
                            </div>
                        </Fragment>
                    )}
                </div>
                <div className="weather-status__bottom">
                    <div className="weather-status__group">
                        <p className="weather-status__temperature">{Math.floor(weather?.main?.temp) || 22}°</p>
                        <div className="weather-status__info">
                            <p className="weather-status__location">{city}</p>
                            <p className="weather-status__date"><Icon icon={["fas", "calendar-alt"]} /> {now}</p>
                        </div>
                    </div>
                    {!loading && <div className="weather-status__status">
                        {/* <Icon className="icon" icon={["fas", "cloud-sun"]} /> */}
                        <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="Weather status" />
                        <p className="label">{status}</p>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default WeatherStatus;
