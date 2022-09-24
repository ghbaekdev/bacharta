import { instance } from './api';

const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

export const getWeather = async (lat, lng) => {
  const response = await instance.get(`lat=${lat}&lon=${lng}&appid=${apiKey}`);
  return response.data;
};
