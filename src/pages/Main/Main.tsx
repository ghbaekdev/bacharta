import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import TodayChartBox from "./TodayChartBox";
import Finance from "../../assets/Finance graph.png";
import Cursor from "../../assets/Cursor.png";
import Laptop from "../../assets/Laptop.png";
import Bar from "../../assets/Content 8.png";
import ExChange from "./ExChange";
import OutfitsResult from "../../components/Outfits/OutfitsResult";

const Main = () => {
  const clickDown = () => {
    console.log("dd");
  };
  const getStorage = localStorage.getItem("location");
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
        <OutfitWrap>
          <OutfitTitle>오늘의 옷차림 추천</OutfitTitle>
          {getStorage ? (
            <>
              <OutfitBox>
                <OutfitsResult />
              </OutfitBox>
            </>
          ) : (
            <>옷차림 추천을 받지 않았습니다</>
          )}
        </OutfitWrap>

        <TodayChartContainer>
          <TodayChartTitle>오늘의 차트 구경</TodayChartTitle>
          <TodayChartBox />
          <TodayChartTitle>오늘의 환율 구경</TodayChartTitle>
          <ExChange />
        </TodayChartContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div``;

const MainBorder = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  ${({ theme }) => theme.flexMixin("center", "center")}
`;

const MainBox = styled.div`
  display: flex;
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
  background-color: ${({ theme }) => theme.mainColor};
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
  padding: 100px 30px;
`;

const TodayChartTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 30px 300px;
`;

const OutfitTitle = styled.p`
  padding: 40px 660px 60px 0;
  font-size: 28px;
  font-weight: bold;
`;
const ChevronBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
  height: 100px;
  font-size: 40px;
  :hover {
    color: gray;
  }
`;

const OutfitWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.sideColor};
`;

const OutfitBox = styled.div`
  width: 1080px;
  background-color: ${({ theme }) => theme.sideColor};
`;

export default Main;
