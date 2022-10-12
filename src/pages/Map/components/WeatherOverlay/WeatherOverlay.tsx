import React, { useEffect, useState } from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import clouds from "../../../../assets/weatherIcons/sun.png";
import rain from "../../../../assets/weatherIcons/rain.png";
import snow from "../../../../assets/weatherIcons/snow.png";
import sun from "../../../../assets/weatherIcons/sun.png";
import { WEATHER_DATA } from "../../../../data/WEATHER_DATA";
import styled from "styled-components";
import { WeatherDataTypes } from "../../Types/WeatherDataTypes";

const WeatherOverlay = (props: WeatherDataTypes) => {
  // const {
  //   coord: { lon, lat },
  //   name,
  //   main: { temp },
  // } = props.data;

  const kelvinTemp = 273.15;

  useEffect(() => {
    let weatherIcons;
    switch (props.data.weather.main) {
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
      {/* {temperature && (
        <CustomOverlayMap position={{ lat: lat, lng: lng }} key={lat}>
          <div
            style={{
              padding: "10qpx",
              backgroundColor: "#e3d4f7",
              color: "#000",
            }}
          >
            <OverlayWrapper>
              <City>{title}</City>
              <Temperature>
                {(temperature.main.temp - kelvinTemp).toFixed(1)}
                <span>&#8451;</span>
              </Temperature>
              <WeatherImage src={icon} />
            </OverlayWrapper>
          </div>
        </CustomOverlayMap>
      )} */}
    </>
  );
};

const OverlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const City = styled.div`
  padding: 5px;
  text-align: center;
`;

const Temperature = styled(City)``;

const WeatherImage = styled.img`
  width: 50px;
  margin: 0 auto;
`;

export default WeatherOverlay;
