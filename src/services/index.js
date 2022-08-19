import http from "./http";

/*
    API calls
*/

const baseUrl = "https://api.openweathermap.org"
const apikey = process.env.REACT_APP_APIKEY;

// Get current weather
export const getWeather = (lat, lon) => http.get(`${baseUrl}/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apikey}`);

// Get coordinates of a city
export const getLatLong = (city) => http.get(`${baseUrl}/geo/1.0/direct?q=${city}&appid=${apikey}`).then((data) => data[0]);

// Get city name from coordinates
export const getCity = (lat, lon) => http.get(`${baseUrl}/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${apikey}`);
// export const getCities = () => http.get(`http://localhost:3000/cities.json`);