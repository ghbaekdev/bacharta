import React, { useEffect } from "react";
import styled from "styled-components";
import OutfitsResult from "../../components/Outfits/OutfitsResult";
import TempChart from "./components/TempChart";
import axios from "axios";
import TempIcon from "./components/TempIcon";
import { useRecoilState } from "recoil";
import { OutfitsWeatherState } from "./Data/UserOutfitsData";
import { WeatherForcastState } from "./Data/WeatherForcastData";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const [weather] = useRecoilState(OutfitsWeatherState);
  const currentLocation = weather.coord;
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
  const [, setWeatherForcast] = useRecoilState(WeatherForcastState);
  const userLocation = localStorage.getItem("location");
  const accessToken = localStorage.getItem("access_token");
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;
  // useEffect(() => {
  //   if (!accessToken) {
  //     // window.location.href = KAKAO_AUTH_URL;
  //     alert("로그인이 필요합니다.");
  //     navigate("/");
  //   }
  // }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.lat}&lon=${currentLocation.lon}&appid=${apiKey}&units=metric`
      )
      .then(function (response) {
        setWeatherForcast({
          city: response.data.city.name,
          list: response.data.list,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ResultWrapper>
      <ResultContents>
        <OutfitsResultWrap>
          <Title>오늘 이런 복장을 추천해요!</Title>
          <OutfitsResult />
        </OutfitsResultWrap>
        <ChartsWrap>
          <Title>{`${userLocation}의 날씨 예보`}</Title>
          <TempIcon />
          <TempChart />
        </ChartsWrap>
      </ResultContents>
    </ResultWrapper>
  );
};
const ResultWrapper = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
`;
const ResultContents = styled.div`
  width: 1080px;
`;
const OutfitsResultWrap = styled.div`
  width: 100%;
  margin-top: 90px;
`;
const Title = styled.h1`
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 22px;
  color: ${(props) => props.theme.mainColor};
`;

const ChartsWrap = styled.div`
  margin-top: 100px;
`;

export default Result;
