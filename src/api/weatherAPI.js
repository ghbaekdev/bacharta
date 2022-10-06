import axios from "axios";

const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getWeather = async (lat, lng) => {
  const response = await instance.get(
    `location?lat=${lat}&lon=${lng}&appid=${apiKey}`
  );
  return response.data;
};
