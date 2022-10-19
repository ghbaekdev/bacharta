import React, { useEffect, useState } from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import clouds from "../../../../assets/weatherIcons/sun.png";
import rain from "../../../../assets/weatherIcons/rain.png";
import snow from "../../../../assets/weatherIcons/snow.png";
import sun from "../../../../assets/weatherIcons/sun.png";
import styled from "styled-components";
import { blue } from "@mui/material/colors";

// import { MapsDataTypes } from "../../Types/MapsDataTypes";

interface WeatherDataTypes {
  data: {
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
  };
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

const WeatherOverlay = (props: any) => {
  const [icon, setIcon] = useState<string>();

  const { coord, main, name, weather } = props.data;

  const kelvinTemp = 273.15;

  useEffect(() => {
    let weatherIcons;
    switch (weather[0].main) {
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
    setIcon(weatherIcons);
  }, []);

  return (
    <>
      <CustomOverlayMap
        position={{ lat: coord.lat, lng: coord.lon }}
        key={coord.lat}
      >
        <OverlayBox>
          <WeatherImageWrapper>
            <WeatherImage src={icon} />
          </WeatherImageWrapper>
          <OverlayWrapper>
            <City>
              <span>{name}</span>
            </City>
            <Temperature>
              {main.temp.toFixed(1)}
              <span>&#8451;</span>
            </Temperature>
          </OverlayWrapper>
        </OverlayBox>
      </CustomOverlayMap>
    </>
  );
};

const OverlayBox = styled.div`
  display: flex;
  padding: 0px 10px 0px 0px;
  background-color: #ffffff;
  color: #000;
  border: none;
  border-radius: 25px;
`;

const WeatherImageWrapper = styled.div`
  padding: 10px;
  border-radius: 20px;
  background-color: #fef6cd;
`;

const OverlayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const WeatherImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 auto;
`;

const City = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  margin: auto;
  font-size: 12px;
  font-weight: 700px;
  font-family: Tango Sans;
`;

const Temperature = styled(City)`
  padding: 5px 0px 5px 0px;
`;

export default WeatherOverlay;
