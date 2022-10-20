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
  position: absolute;
  top: 140px;
  left: 30px;
  z-index: 10;
`;

const WeatherButton = styled.button`
  width: 80px;
  height: 40px;
  margin: 3px;
  border: none;
  border-radius: 10px;
  background: #3c55e6;
  color: #ffffff;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background: #6073e0;
  }
`;

const MicrodustsButton = styled(WeatherButton)``;
