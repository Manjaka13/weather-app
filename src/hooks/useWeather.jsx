import React, { useState, useEffect, useContext, createContext } from "react";
import { getWeather, getLatLong } from "../services/index";
import cities from "../helpers/cities";

/*
    Weather hook and context
*/

// Setup context
const WeatherContext = createContext({});

const defaultCity = {
    name: "Antsirabe",
    coordinates: [-19.863102, 47.034932]
}

// Setup provider wrapper
const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(defaultCity.name);
    const [loading, setLoading] = useState(true);

    const updateCity = (str) => setCity(str);

    useEffect(() => {
        getWeather(defaultCity.coordinates[0], defaultCity.coordinates[1])
            .then(setWeather)
            .then(() => setLoading(false))
            .catch(console.error);
    }, []);

    useEffect(() => {
        setLoading(true);
        getLatLong(city)
            .then(({ lat, lon }) => getWeather(lat, lon))
            .then(setWeather)
            .then(() => setLoading(false))
            .catch(console.error);
    }, [city]);

    return (
        <WeatherContext.Provider
            value={{
                weather,
                city,
                updateCity,
                loading,
                cities
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider };
