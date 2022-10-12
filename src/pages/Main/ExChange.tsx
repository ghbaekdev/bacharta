import styled from "styled-components";
import ExchangeCard from "./ExchangeCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ExchageProps } from './MainTypes';
import { ExchangeProps, ExchangeArrayProps } from "./ChartData/ChartData";
import NATION_FLAG from "../../data/NATION_FLAG";
import NationFlag from "./NationFlag";

const ExChange = ({ exchangeData }: ExchangeArrayProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <ExchageContainer>
      <StyleSlider {...settings}>
        {exchangeData.map((el: ExchangeProps) => {
          NATION_FLAG.map((el) => {
            return el.flag_url;
          });
          return (
            <ExchangeCard
              key={el.ten_dd_efee_r}
              unit={el.cur_nm}
              nation={el.cur_unit}
              price={el.bkpr}
            />
          );
        })}
      </StyleSlider>
    </ExchageContainer>
  );
};

export default ExChange;

const ExchageContainer = styled.div`
  padding: 0 50px;
  height: 450px;
`;

const StyleSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 30px;
    line-height: 1;
    opacity: 0.75;
    color: #3b55e6;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-prev,
  .slick-next {
    background: transparent;
  }
`;
