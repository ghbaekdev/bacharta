import React from "react";
import styled from "styled-components";

export default function Checkbox() {
  return (
    <CheckboxWrapper>
      <CheckboxTitles>
        <p>지역별 미세먼지 필터</p>
        <p>원하시는 지역을 선택해 주세요</p>
      </CheckboxTitles>
      <StyledCheckbox>
        <Checkboxes>수도권</Checkboxes>
      </StyledCheckbox>
    </CheckboxWrapper>
  );
}

const CheckboxWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  top: 220px;
  left: 20px;
  padding: 5px;
  z-index: 10;
  width: 280px;
  height: 300px;
  background-color: white;
`;

const CheckboxTitles = styled.div`
  font-size: 13px;
  font-family: "Courier New", Courier, monospace;
`;

const StyledCheckbox = styled.input``;

const Checkboxes = styled.input``;
