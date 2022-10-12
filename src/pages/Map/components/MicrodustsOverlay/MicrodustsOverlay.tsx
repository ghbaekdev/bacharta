import React, { useState } from "react";
import styled from "styled-components";
import { MARKER_DATA } from "../../../../data/MARKER_DATA";
import theme from "../../../../styles/theme";
import { CustomOverlayMap } from "react-kakao-maps-sdk";

interface CheckedCitiesType {
  key: {
    title: string;
    lat: number;
    lng: number;
  }[];
}

export default function MicrodustsOverlay() {
  const [checkedCities, setCheckedCities] = useState<CheckedCitiesType>([]);

  const handleChecked = (title: string, lat: number, lng: number) => {
    setCheckedCities([...checkedCities, { title: title, lat: lat, lng: lng }]);
  };

  return (
    <>
      <CheckBox>
        {MARKER_DATA.map(({ id, title, lat, lng }) => {
          return (
            <InputBox>
              <Input
                type="checkbox"
                value={id}
                name={title}
                onChange={() => handleChecked(title, lat, lng)}
              />
              <City>{title}</City>
            </InputBox>
          );
        })}
      </CheckBox>
      {checkedCities.map(({ lat, lng, title }) => {
        return (
          <CustomOverlayMap position={{ lat: lat, lng: lng }} key={lat}>
            <div
              style={{
                padding: "10qpx",
                backgroundColor: "#e3d4f7",
                color: "#000",
              }}
            >
              {title}
            </div>
          </CustomOverlayMap>
        );
      })}
    </>
  );
}

const CheckBox = styled.div`
  position: fixed;
  top: 170px;
  left: 20px;
  width: 150px;
  height: 250px;
  background: ${theme.white};
  z-index: 10;
`;

const InputBox = styled.div``;

const Input = styled.input``;

const City = styled.span``;
