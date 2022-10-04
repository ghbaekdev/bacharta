import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharContainer from "./ChartContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import TodayChartBox from "./TodayChartBox";
import Finance from "../../assets/Finance graph.png";
import ExChange from "./ExChange";

const Main = () => {
  const [exchangeData, setExchangeData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/exchange")
      .then((res) => setExchangeData(res.data));
  }, []);

  console.log(exchangeData);
  const clickDown = () => {
    console.log("dd");
  };
  return (
    <>
      <MainContainer>
        <MainBorder>
          <MainBox>
            <MainBoxTitle>
              <BoxText>원하시는 통계를 차트로 확인하세요!</BoxText>
              <BoxText>수치로써 확인할 수 있습니다!</BoxText>
              <BoxText>날씨별 옷차림도 추천받아보세요!</BoxText>
              <BoxText style={{ fontSize: "20px" }}>
                {
                  "여러분들이 원하는 차트가 있습니다! \n원하시는 통계를 차트로 확인하세요!"
                }
              </BoxText>
              <ImageContainer>
                <MainImage src={Finance} />
              </ImageContainer>
            </MainBoxTitle>
            <CharContainer />
          </MainBox>
          <ChevronBox>
            <FontAwesomeIcon onClick={clickDown} icon={faChevronDown} />
          </ChevronBox>
        </MainBorder>

        <TodayChartContainer>
          <TodayChartTitle>오늘의 차트 구경</TodayChartTitle>
          <TodayChartBox />
          <TodayChartTitle>오늘의 환율 구경</TodayChartTitle>

          <ExChange exchangeData={exchangeData} />
        </TodayChartContainer>
      </MainContainer>
    </>
  );
};

//<Exchange exchangeData={exchangeData} />
const MainContainer = styled.div``;

const MainBorder = styled.div`
  background-color: ${(props) => props.theme.mainColor};
`;

const MainBox = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.mainColor};
  margin: 0 20%;
  height: 50%;
`;

const MainBoxTitle = styled.div`
  color: white;
  padding: 20px;
  margin-top: 100px;
  width: 50%;
  height: 680px;
  white-space: pre-wrap;
`;

const MainImage = styled.img`
  width: 400px;
  height: 400px;
`;
const ImageContainer = styled.div``;

const BoxText = styled.p`
  color: white;
  margin-bottom: 25px;
  font-size: 28px;
`;

const TodayChartContainer = styled.div`
  height: 650px;
  margin: 150px 0;
`;

const TodayChartTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 30px 300px;
`;

const ChevronBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: white;
  height: 100px;
  font-size: 40px;
  :hover {
    color: gray;
  }
`;

const Box = styled.div`
  display: flex;
`;

export default Main;
