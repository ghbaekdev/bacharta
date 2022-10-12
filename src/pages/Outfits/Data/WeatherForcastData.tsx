import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const WeatherForcastState = atom({
  key: `userState/${uuidv4()}`,
  default: {
    city: "",
    list: [
      {
        dt: 0,
        dt_txt: 0,
        main: {
          humidity: 0,
          temp: 0,
          temp_max: 0,
          temp_mix: 0,
        },
        weather: [
          {
            description: "",
            main: "",
            icon: "",
          },
        ],
      },
    ],
  },
});
