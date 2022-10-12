import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.35.104:3001/atmosphere/",
});

// export const getMicrodustsLevel = async (stationcode) => {
//   const response = await instance.get(`${stationcode}`);
//   return response.data;
// };
