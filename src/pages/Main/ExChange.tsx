import styled from "styled-components";
import ExchangeCard from "./ExchangeCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ExchageProps } from './MainTypes';

const ExChange = ({ exchangeData }: { exchangeData: any }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <Bt />,
  };

  interface ExchageProps {
    cur_nm: string;
    cur_unit: string;
    kftc_bkpr: string;
  }
  return (
    <ExchageContainer>
      <Slider {...settings}>
        {exchangeData.map(({ cur_nm, cur_unit, kftc_bkpr }: ExchageProps) => (
          <ExchangeCard
            key={cur_nm}
            nation={cur_nm}
            unit={cur_unit}
            price={kftc_bkpr}
          />
        ))}
      </Slider>
    </ExchageContainer>
  );
};

export default ExChange;

const ExchageContainer = styled.div`
  height: 450px;
  overflow: hidden;
`;
const Bt = styled.div`
  background-color: red;
  width: 30px;
  height: 30px;
`;
