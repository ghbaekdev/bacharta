import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
interface UserSelectProps {
  isActiveModalStatus: () => void;
  getLocationWeather: () => void;
  handleChangeLocation: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userLocation: string | null;
  isLocationError: boolean;
}
const LocationSelect = ({
  isActiveModalStatus,
  handleChangeLocation,
  getLocationWeather,
  isLocationError,
  userLocation,
}: UserSelectProps) => {
  return (
    <Wrap>
      <ModalHeader>
        <ModalTitle>지금 계신곳을 알려주세요.</ModalTitle>
      </ModalHeader>
      <ModalSection>
        <ModalImage
          src="/images/Outfits/mark.png"
          alt="마커아이콘"
        ></ModalImage>
      </ModalSection>
      <ModalSelect>
        <TextField
          label="지역명"
          id="standard-size-small"
          defaultValue={userLocation}
          size="small"
          variant="standard"
          placeholder="예: 강남구"
          onChange={handleChangeLocation}
        />
      </ModalSelect>
      {isLocationError ? (
        <Stack
          sx={{ width: "100%", marginTop: "16px" }}
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Alert severity="error">검색하신 지역명이 없습니다. 예 강남구</Alert>
        </Stack>
      ) : null}
      <ModalFooter>
        <NextButton onClick={getLocationWeather} disabled={!userLocation}>
          다음
        </NextButton>
      </ModalFooter>
    </Wrap>
  );
};

const Wrap = styled.div``;
const ModalHeader = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
`;
const ModalTitle = styled.h2`
  padding: 10px 0;
  font-weight: 600;
  font-size: 22px;
  color: ${(props) => props.theme.mainColor};
`;

const ModalSection = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
`;
const ModalImage = styled.img`
  padding-top: 10px;
  width: 70px;
`;

const ModalSelect = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  padding-top: 16px;
`;

const ModalFooter = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
  padding-top: 24px;
`;

const NextButton = styled.button`
  background-color: ${(props) =>
    props.disabled === true ? props.theme.ligthGrey : props.theme.mainColor};
  padding: 10px 30px;
  color: ${(props) =>
    props.disabled === true ? props.theme.mainColor : props.theme.white};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background-color: ${(props) =>
      props.disabled === true ? props.theme.ligthGrey : props.theme.hoverBlue};
  }
`;
export default LocationSelect;
