import React from "react";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { indigo, grey } from "@mui/material/colors";
interface ControlProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  inputProps: {
    "aria-label": string;
  };
}

interface SelectProps {
  weatherIcons: string;
  isGoToResult: () => void;
  isActiveModalStatus: () => void;
  controlProps: (item: string) => ControlProps;
}

const TemperatureSelect = ({
  isActiveModalStatus,
  controlProps,
  weatherIcons,
  isGoToResult,
}: SelectProps) => {
  return (
    <Wrap>
      <ModalHeader>
        <ModalTitle>지금 느끼는 온도는 어떤가요?</ModalTitle>
      </ModalHeader>
      <ModalSection>
        <ModalImage src={weatherIcons} alt="날씨아이콘"></ModalImage>
      </ModalSection>
      <ModalSelect>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="normal"
            color="success"
          >
            {USER_TEMP_SELECT_OPTION.map((tempOption) => {
              return (
                <FormControlLabel
                  key={tempOption.id}
                  value={tempOption.id}
                  control={
                    <Radio
                      {...controlProps(tempOption.temp)}
                      sx={{
                        color: grey["300"],
                        "&.Mui-checked": {
                          color: indigo["A200"],
                        },
                      }}
                    />
                  }
                  label={tempOption.text}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </ModalSelect>
      <ModalFooter>
        <PrevButton onClick={isActiveModalStatus}>이전</PrevButton>
        <NextButton onClick={isGoToResult}>다음</NextButton>
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
  ${({ theme }) => theme.flexMixin("center", "center")}
  padding-top: 10px;
`;
const ModalImage = styled.img`
  width: 100px;
  margin-top: 2px;
`;

const ModalSelect = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  padding-top: 16px;
`;
const ModalFooter = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
  padding-top: 19px;
`;

const PrevButton = styled.button`
  box-sizing: border-box;
  margin-right: 10px;
  background-color: ${(props) => props.theme.lightGrey};
  padding: 10px 30px;
  color: ${(props) => props.theme.mainColor};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background-color: ${(props) => props.theme.grey};
  }
`;
const NextButton = styled.button`
  background-color: ${(props) => props.theme.mainColor};
  padding: 10px 30px;
  color: ${(props) => props.theme.white};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background-color: ${(props) => props.theme.hoverBlue};
  }
`;

const USER_TEMP_SELECT_OPTION = [
  { id: 0, temp: "-5", text: "추워요" },
  { id: 1, temp: "-3", text: "조금 추워요" },
  { id: 2, temp: "0", text: "적당해요" },
  { id: 3, temp: "3", text: "조금 더워요" },
  { id: 4, temp: "5", text: "더워요" },
];
export default TemperatureSelect;
