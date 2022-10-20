import React, { useState } from "react";
import styled from "styled-components";
import { MARKER_DATA } from "../../../../data/MARKER_DATA";
import theme from "../../../../styles/theme";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { getMicrodustsLevel } from "../../../../api/microdustsAPI";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../components/Loading/Loading";
import * as S from "../WeatherOverlay/WeatherOverlay";

export default function MicrodustsOverlay() {
  const [checkedCities, setCheckedCities] = useState(1);
  const [microdusts, setMicrodusts] = useState([
    {
      stationcode: "1",
      atmosphereValue: "22",
    },
  ]);
  // const [microdustsIcon, setMicrodustsIcon] = useState<string>();

  const { status } = useQuery(
    ["microdustsLevelData", checkedCities],
    async () => {
      const response = await getMicrodustsLevel(checkedCities);
      setMicrodusts([...microdusts, response.data]);
      return response;
    },
    {
      enabled: !!checkedCities,
      retry: false,
    }
  );

  if (status === "loading") return <Loading />;

  const handleCityButton = (id: number) => {
    setCheckedCities(id);
  };

  const resetMicrodustsButtons = () => {
    setMicrodusts([
      {
        stationcode: "1",
        atmosphereValue: "22",
      },
    ]);
  };

  return (
    <>
      <CityButtonBox>
        {MARKER_DATA.map(({ stationcode: id, title }) => {
          return (
            <CityButton onClick={() => handleCityButton(id)}>
              <City>{title}</City>
            </CityButton>
          );
        })}
        <ResetButton onClick={resetMicrodustsButtons}>초기화</ResetButton>
      </CityButtonBox>

      {microdusts?.map((data, index: any) => {
        let lat = 37.55618879776183;
        let lng = 126.97199497515037;
        let value = "좋음";
        let name = "서울";
        let icon = "";
        switch (data.stationcode) {
          case "1":
            lat = 37.55618879776183;
            lng = 126.97199497515037;
            name = "서울";
            break;
          case "10":
            lat = 37.80434746803854;
            lng = 128.90772877206354;
            name = "강릉";
            break;
          case "4":
            lat = 36.350685319951296;
            lng = 127.38484113756908;
            name = "대전";
            break;
          case "6":
            lat = 35.17989493738095;
            lng = 129.07481938748694;
            name = "부산";
            break;
          case "3":
            lat = 34.81175981302351;
            lng = 126.39288397125186;
            name = "목포";
            break;
          case "5":
            lat = 33.49946587036754;
            lng = 126.53085345505487;
            name = "제주";
            break;
        }

        if (Number(data.atmosphereValue) <= 30) {
          value = "좋음";
          icon = "😍";
        } else if (Number(data.atmosphereValue) <= 80) {
          value = "보통";
          icon = "🙂";
        } else if (Number(data.atmosphereValue) <= 150) {
          value = "나쁨";
          icon = "☹️";
        } else {
          value = "매우나쁨";
          icon = "😷";
        }

        return (
          <CustomOverlayMap position={{ lat: lat, lng: lng }} key={index}>
            <MicrodustsBox>
              <MicrodustsImageWrapper>{icon}</MicrodustsImageWrapper>
              <S.OverlayWrapper>
                <S.City>
                  <span>{name}</span>
                </S.City>
                <S.Temperature>{value}</S.Temperature>
              </S.OverlayWrapper>
            </MicrodustsBox>
          </CustomOverlayMap>
        );
      })}
    </>
  );
}
const MicrodustsBox = styled(S.OverlayBox)`
  height: 40px;
`;
const CityButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 200px;
  left: 34px;
  width: 165px;
  height: 320px;
  background-color: ${theme.white};
  z-index: 10;
  border-radius: 15px;
  border: 2px solid #3c55e6;
`;

const MicrodustsImageWrapper = styled(S.WeatherImageWrapper)`
  background-color: #dffecd;
`;
const CityButton = styled.button`
  width: 80px;
  height: 40px;
  margin: auto;
  align-self: center;
  border: 2px solid #3c55e6;
  border-radius: 10px;
  background: #3c55e6;
  color: #ffffff;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background: #6073e0;
  }
`;

const City = styled.div`
  margin: 3px;
  margin-left: 10px;
  font-size: 13px;
  padding-top: 1px;
`;

const ResetButton = styled(CityButton)`
  border: 2px solid #3c55e6;
  border-radius: 10px;
  background: #ffffff;
  color: #3c55e6;
  font-weight: 600;
  &:hover {
    background: #b6c0ff;
  }
`;
