import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const UserSelectState = atom({
  key: `userState/${uuidv4()}`,
  default: {
    userTemp: "0",
  },
});

const Coord = {
  lon: 0,
  lat: 0,
};

const Weather = [
  {
    id: 0,
    main: "",
    description: "",
    icon: "",
  },
];

const Main = {
  temp: 0,
  feels_like: 0,
  temp_min: 0,
  temp_max: 0,
  pressure: 0,
  humidity: 0,
  sea_level: 0,
  grnd_level: 0,
};

const Wind = {
  speed: 0,
  deg: 0,
  gust: 0,
};

const Clouds = {
  all: 0,
};

const Sys = {
  country: "",
  sunrise: 0,
  sunset: 0,
};

export const OutfitsWeatherState = atom({
  key: `userState/${uuidv4()}`,
  default: {
    coord: Coord,
    weather: Weather,
    base: "",
    main: Main,
    visibility: 0,
    wind: Wind,
    clouds: Clouds,
    dt: 0,
    sys: Sys,
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  },
});
