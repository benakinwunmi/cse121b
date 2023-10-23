const API_KEY = 'ea7e5097a365ae7106ab2ac739347950';

export const getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    return data;
};