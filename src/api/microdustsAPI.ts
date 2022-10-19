import { instance } from "./api";

export const getMicrodustsLevel = async (stationcode: number) => {
  const response = await instance.get(`/atmosphere/${stationcode}`);
  return response.data;
};
