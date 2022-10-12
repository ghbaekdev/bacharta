import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";

import clouds from "../../assets/weatherIcons/clouds.png";
import rain from "../../assets/weatherIcons/rain.png";
import snow from "../../assets/weatherIcons/snow.png";
import sun from "../../assets/weatherIcons/sun.png";

interface DataType {
  data: { title: string; lat: number; lng: number };
}

const Overlay = ({ data: { title, lat, lng } }: DataType) => {
  const [temperature, setTemperature] = useState<Root>();
  const [icon, setIcon] = useState<string>();

  interface Root {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }

  interface Coord {
    lon: number;
    lat: number;
  }

  interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  }

  interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }

  interface Clouds {
    all: number;
  }

  interface Sys {
    country: string;
    sunrise: number;
    sunset: number;
  }

  const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`
      )
      .then((res) => {
        let weatherIcons;
        switch (res.data.weather[0].main) {
          case "Clear":
            weatherIcons = sun;
            break;
          case "Clouds":
            weatherIcons = clouds;
            break;
          case "Rain":
            weatherIcons = rain;
            break;
          case "Snow":
            weatherIcons = snow;
            break;
          default:
            weatherIcons = sun;
        }
        setTemperature(res.data);
        setIcon(weatherIcons);
      });

    // api.getWeather(lat, lng).then((res) => console.log(res.data));
  }, []);

  // const switchIcons = () => {
  //   let weatherIcons = '';
  //   switch (temperature.weather[0].main) {
  //     case 'Clear':
  //       weatherIcons = 'sun.png';
  //       break;
  //     case 'Clouds':
  //       weatherIcons = 'cloudy.png';
  //       break;
  //     case 'Rain':
  //       weatherIcons = 'rain.png';
  //       break;
  //     case 'Snow':
  //       weatherIcons = 'cloudy.png';
  //       break;
  //     default:
  //       weatherIcons = 'sun.png';
  //   }
  //   return weatherIcons;
  // };

  return (
    <>
      {temperature && (
        <CustomOverlayMap position={{ lat: lat, lng: lng }} key={lat}>
          <div
            style={{
              padding: "10qpx",
              backgroundColor: "#fff",
              color: "#000",
            }}
          >
            {title}
            {temperature.main.temp}
            {/* <img src={`../../assets/weatherIcons/${icon}`} /> */}
            <img src={icon} />
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
};

export default Overlay;
