import React, { useEffect, useState } from 'react';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import clouds from '../../../../assets/weatherIcons/sun.png';
import rain from '../../../../assets/weatherIcons/rain.png';
import snow from '../../../../assets/weatherIcons/snow.png';
import sun from '../../../../assets/weatherIcons/sun.png';
import { WEATHER_DATA } from '../../../../data/WEATHER_DATA';
import styled from 'styled-components';

interface DataType {
  data: { title: string; lat: number; lng: number };
}

const Overlay = ({ data: { title, lat, lng } }: DataType) => {
  const [temperature, setTemperature] = useState<Root>(WEATHER_DATA);
  const [icon, setIcon] = useState<string>();

  const kelvinTemp = 273.15;

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

  useEffect(() => {
    let weatherIcons;
    switch (temperature.weather[0].main) {
      case 'Clear':
        weatherIcons = sun;
        break;
      case 'Clouds':
        weatherIcons = clouds;
        break;
      case 'Rain':
        weatherIcons = rain;
        break;
      case 'Snow':
        weatherIcons = snow;
        break;
      default:
        weatherIcons = sun;
    }
    setIcon(weatherIcons);
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`
  //     )
  //     .then((res) => {
  //       let weatherIcons;
  //       switch (res.data.weather[0].main) {
  //         case 'Clear':
  //           weatherIcons = sun;
  //           break;
  //         case 'Clouds':
  //           weatherIcons = clouds;
  //           break;
  //         case 'Rain':
  //           weatherIcons = rain;
  //           break;
  //         case 'Snow':
  //           weatherIcons = snow;
  //           break;
  //         default:
  //           weatherIcons = sun;
  //       }
  //       setTemperature(res.data);
  //       setIcon(weatherIcons);
  //     });

  // }, []);

  return (
    <>
      {temperature && (
        <CustomOverlayMap position={{ lat: lat, lng: lng }} key={lat}>
          <div
            style={{
              padding: '10qpx',
              backgroundColor: '#e3d4f7',
              color: '#000',
            }}
          >
            <City>{title}</City>
            <Temperature>
              {(temperature.main.temp - kelvinTemp).toFixed(1)}
              <span>&#8451;</span>
            </Temperature>
            <WeatherImage src={icon} />
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
};

const City = styled.div`
  padding: 5px;
  text-align: center;
`;
const Temperature = styled(City)``;

const WeatherImage = styled.img`
  width: 50px;
`;

export default Overlay;
