import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import TodayChartBox from "./TodayChartBox";
import Finance from "../../assets/Finance graph.png";
import Cursor from "../../assets/Cursor.png";
import Laptop from "../../assets/Laptop.png";
import Bar from "../../assets/Content 8.png";
import ExChange from "./ExChange";
import { ExchangeProps } from "./ChartData/ChartData";
import { useQueries } from "@tanstack/react-query";

const Main = () => {
  const [exchangeData, setExchangeData] = useState<ExchangeProps[]>([]);

  useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:3001/exchange")
        .then((res) => setExchangeData(res.data.data));
      axios
        .get("http://127.0.0.1:3001/atmosphere/1")
        .then((res) => console.log(res, "atmo"));
    } catch {
      console.log("에러");
    }
  }, []);

  const clickDown = () => {
    console.log("dd");
  };
  return (
    <>
      <MainContainer>
        <MainBorder>
          <MainBox>
            <MainBoxContents>
              <MainBoxTitle>
                <BoxText>원하시는 통계를 차트로 확인하세요!</BoxText>
                <BoxText>수치로써 확인할 수 있습니다!</BoxText>
                <BoxText>날씨별 옷차림도 추천받아보세요!</BoxText>
                <BoxText style={{ fontSize: "20px" }}>
                  {
                    "여러분들이 원하는 차트가 있습니다! \n원하시는 통계를 차트로 확인하세요!"
                  }
                </BoxText>
              </MainBoxTitle>
              <SubImageContainer>
                <GraphImage src={Finance} />
                <LaptopImage src={Laptop} />
                <CursorImage src={Cursor} />
                <BarImage src={Bar} />
              </SubImageContainer>
            </MainBoxContents>
            <ChevronBox>
              <FontAwesomeIcon onClick={clickDown} icon={faChevronDown} />
            </ChevronBox>
          </MainBox>
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
const MainContainer = styled.div`
  padding-bottom: 300px;
`;

const MainBorder = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  ${({ theme }) => theme.flexMixin("center", "center")}
`;

const MainBox = styled.div`
  width: 1080px;
  margin: 0 20%;
  height: 50%;
`;
const MainBoxContents = styled.div`
  display: flex;
`;
const MainBoxTitle = styled.div`
  color: white;
  margin-top: 100px;
  margin-right: 50px;
  width: 50%;
  height: 680px;
  white-space: pre-wrap;
`;

const GraphImage = styled.img`
  position: absolute;
  width: 400px;
  height: 400px;
  left: 120px;
  z-index: 3;
`;
const LaptopImage = styled.img`
  position: absolute;
  width: 400px;
  height: 400px;
  bottom: 20px;
  z-index: 1;
`;
const CursorImage = styled.img`
  position: absolute;
  width: 100px;
  top: 45%;
  right: 20px;
  z-index: 4;
`;
const BarImage = styled.img`
  position: absolute;
  width: 350px;
  bottom: 50px;
  left: -150px;
  z-index: 2;
`;

const SubImageContainer = styled.div`
  position: relative;
  width: 500px;
  height: 680px;
`;
const BoxText = styled.p`
  color: white;
  margin-bottom: 25px;
  font-size: 28px;
`;

const TodayChartContainer = styled.div`
  background-color: ${({ theme }) => theme.sideColor};
  padding-top: 30px;
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
  background-color: ${({ theme }) => theme.mainColor};
  margin-top: 10px;
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
