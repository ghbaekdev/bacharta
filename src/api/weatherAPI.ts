import { instance } from "./api";

export const getWeather = async () => {
  const response = await instance.get(`/location`);
  return response.data;
};
