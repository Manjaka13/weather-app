import React, { useState, useEffect, useContext, createContext } from "react";
import { getWeather } from "../services/index";

/*
    Weather hook and context
*/

// Setup context
const WeatherContext = createContext({});

// Setup provider wrapper
const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("Antsirabe");
    const [coordinates, setCoordinates] = useState([-19.863102, 47.034932]);
    const [suggestions, setSuggestions] = useState(null);
    const [loading, setLoading] = useState(true);

    const updateCity = (str) => setCity(str);

    useEffect(() => {
        getWeather(coordinates[0], coordinates[1])
            .then(setWeather)
            .then(() => setLoading(false))
            .catch(console.error);
    }, []);

    return (
        <WeatherContext.Provider
            value={{
                weather,
                city,
                suggestions,
                updateCity,
                loading
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider };
