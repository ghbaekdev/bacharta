import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { WeatherForcastState } from "../Data/WeatherForcastData";
import clouds from "../../../assets/weatherIcons/clouds.png";
import rain from "../../../assets/weatherIcons/rain.png";
import snow from "../../../assets/weatherIcons/snow.png";
import sun from "../../../assets/weatherIcons/sun.png";
import mist from "../../../assets/weatherIcons/mist.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const TempIcon = () => {
  const [wetherForcast] = useRecoilState(WeatherForcastState);
  const { list } = wetherForcast;
  let day = "";

  const hourlyWeathers = list?.map((weatherObject) => {
    let date = new Date(weatherObject.dt_txt);
    let hoursToString = weatherObject.dt_txt.toString();
    const monthDate = `${("0" + (date.getMonth() + 1)).slice(-2)}-${(
      "0" + date.getDate()
    ).slice(-2)}`;

    const mdValue = day === monthDate ? "" : monthDate;
    if (day !== mdValue) {
      day = monthDate;
    }
    return {
      md: mdValue,
      hour: hoursToString.split(" ")[1],
      main: weatherObject.weather[0].main,
      icon: weatherObject.weather[0].icon,
      temp: weatherObject.main.temp,
    };
  });

  const getWeatherIcon = (main: string) => {
    switch (main) {
      case "Clear":
        return sun;

      case "Clouds":
        return clouds;

      case "Rain":
        return rain;

      case "Snow":
        return snow;

      case "Mist":
        return mist;
      case "Haze":
        return mist;

      default:
        return sun;
    }
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    dots: true,

    nextArrow: (
      <SliderButtonWrap>
        <ArrowForwardIosIcon />
      </SliderButtonWrap>
    ),
    prevArrow: (
      <SliderButtonWrap>
        <ArrowBackIosIcon />
      </SliderButtonWrap>
    ),
  };

  return (
    <>
      {hourlyWeathers && (
        <Wrap>
          <Slider {...settings}>
            {hourlyWeathers.map((el, idx) => {
              return (
                <WeatherList key={idx}>
                  <DateWeather>{el.md}</DateWeather>
                  <HourWeather>{el.hour}</HourWeather>
                  <ImageWrap>
                    <WeatherImage
                      src={getWeatherIcon(el.main)}
                      alt="날씨아이콘"
                    ></WeatherImage>
                  </ImageWrap>
                  <TempWeather>{el.temp}°C</TempWeather>
                </WeatherList>
              );
            })}
          </Slider>
        </Wrap>
      )}
    </>
  );
};

const Wrap = styled.div`
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.white};
  padding: 40px 70px;
  width: 100%;
  border-radius: ${(props) => props.theme.bordeRadius};
  box-shadow: ${(props) => props.theme.lowModalShadow};
  overflow: hidden;
`;
const SliderButtonWrap = styled.div`
  width: 50px;
  height: 30px;
  color: ${(props) => props.theme.deepGrey};
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }
`;

const WeatherList = styled.div`
  margin-bottom: 10px;
  padding: 5px;
`;
const ImageWrap = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  margin-top: 0.8em;
  margin-bottom: 0.4em;
  width: 100%;
  height: 4rem;
`;
const WeatherImage = styled.img`
  width: 4rem;
`;

const DateWeather = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.mainColor};
  font-weight: 700;
  font-size: 1.2rem;
  padding: 3px;
  height: 2em;
`;

const HourWeather = styled.p`
  text-align: center;
  margin-top: 4px;
  background-color: ${(props) => props.theme.grey};
  border-radius: 1em;
  padding: 4px 8px;
`;

const TempWeather = styled.p`
  text-align: center;
  font-weight: 500;
`;
export default TempIcon;
