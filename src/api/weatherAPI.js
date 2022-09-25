import axios from 'axios';

const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

const weatherInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather?',
});

export const getWeather = async (lat, lng) => {
  const response = await weatherInstance.get(
    `lat=${lat}&lon=${lng}&appid=${apiKey}`
  );
  return response.data;
};
