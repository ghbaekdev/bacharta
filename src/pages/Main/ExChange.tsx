import styled from "styled-components";
import ExchangeCard from "./ExchangeCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ExchageProps } from './MainTypes';
interface ExchangeProps {
  bkpr: string;
  cur_nm: string;
  cur_unit: string;
  deal_bas_r: string;
  kftc_bkpr: string;
  kftc_deal_bas_r: string;
  result: number;
  ten_dd_efee_r: string;
  ttb: string;
  tts: string;
  yy_efee_r: string;
}

interface Props {
  exchangeData: ExchangeProps[];
}

const ExChange = ({ exchangeData }: Props) => {
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
