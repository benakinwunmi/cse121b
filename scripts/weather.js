import { getWeather } from './api.js';

const cityInput = document.getElementById('cityInput');
const getWeatherButton = document.getElementById('getWeather');
const weatherInfoDiv = document.getElementById('weatherInfo');

const displayWeather = (weatherData) => {
    weatherInfoDiv.innerHTML = `
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Condition: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
    `;
};

getWeatherButton.addEventListener('click', async () => {
    const cityName = cityInput.value;
    if (cityName) {
        try {
            const weatherData = await getWeather(cityName);
            displayWeather(weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            weatherInfoDiv.innerHTML = 'Error fetching weather data. Please try again later.';
        }
    }
});