import React, { useEffect, useState } from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import clouds from "../../../../assets/weatherIcons/sun.png";
import rain from "../../../../assets/weatherIcons/rain.png";
import snow from "../../../../assets/weatherIcons/snow.png";
import sun from "../../../../assets/weatherIcons/sun.png";
import styled from "styled-components";

const WeatherOverlay = (props: any) => {
  const [icon, setIcon] = useState<string>();

  const { coord, main, name, weather } = props.data;

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
            &#8451;
          </Temperature>
        </OverlayWrapper>
      </OverlayBox>
    </CustomOverlayMap>
  );
};

export const OverlayBox = styled.div`
  display: flex;
  padding: 0px 10px 0px 0px;
  background-color: #ffffff;
  color: #000;
  border: none;
  border-radius: 25px;
`;

export const WeatherImageWrapper = styled.div`
  padding: 10px;
  border-radius: 20px;
  background-color: #fef6cd;
`;

export const OverlayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const WeatherImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 auto;
`;

export const City = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  margin: auto;
  font-size: 14px;
  font-family: Tango Sans;
  span {
    font-weight: 600;
  }
`;

export const Temperature = styled(City)`
  padding: 5px 0px 5px 0px;
`;

export default WeatherOverlay;
