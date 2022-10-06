import React from "react";
import styled from "styled-components";

export default function Buttons({ weatherSwitch, microdustsSwitch }) {
  return (
    <ButtonsWrapper>
      <WeatherButton onClick={weatherSwitch}>날씨</WeatherButton>
      <MicrodustsButton onClick={microdustsSwitch}>미세먼지</MicrodustsButton>
    </ButtonsWrapper>
  );
}

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 120px;
  left: 10px;
  padding: 5px;
  z-index: 10;
`;
const WeatherButton = styled.button`
  width: 80px;
  height: 40px;
`;

const MicrodustsButton = styled(WeatherButton)``;