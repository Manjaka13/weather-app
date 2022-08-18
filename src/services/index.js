import http from "./http";

/*
    API calls
*/

const baseUrl = "https://api.openweathermap.org"
const apikey = "e8ef23bd6458a4bddfa8a8da22f8bb16";

// Get current weather
export const getWeather = (lat, lon) => http.get(`${baseUrl}/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apikey}`);

// Get coordinates of a city
export const getLatLong = (city) => http.get(`${baseUrl}/geo/1.0/direct?q=${city}&appid=${apikey}`);

// Get city name from coordinates
export const getCity = (lat, lon) => http.get(`${baseUrl}/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${apikey}`);