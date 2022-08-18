import React, { Fragment } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { useWeather } from "../hooks/useWeather";

/*
    Displays weather status
*/

const WeatherStatus = () => {
    const { loading } = useWeather();

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
                                    <p className="label"><Icon icon={["fas", "clock"]} /> 5h32</p>
                                </div>
                            </div>
                            <div className="weather-status__sunset">
                                <Icon className="icon" icon={["fas", "moon"]} />
                                <div>
                                    <p className="caption">Sunset</p>
                                    <p className="label"><Icon icon={["fas", "clock"]} /> 18h44</p>
                                </div>
                            </div>
                        </Fragment>
                    )}
                </div>
                <div className="weather-status__bottom">
                    <div className="weather-status__group">
                        <p className="weather-status__temperature">22°</p>
                        <div className="weather-status__info">
                            <p className="weather-status__location">Antsirabe</p>
                            <p className="weather-status__date"><Icon icon={["fas", "calendar-alt"]} /> Thursday 18 Aug. 2022</p>
                        </div>
                    </div>
                    <div className="weather-status__status">
                        <Icon className="icon" icon={["fas", "cloud-sun"]} />
                        <p className="label">Sunny</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherStatus;
