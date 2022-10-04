import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChartContainer = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <ChartBox>
        <Slider {...settings}>
          <ChartContent>1</ChartContent>
          <ChartContent>2</ChartContent>
          <ChartContent>3</ChartContent>
          <ChartContent>4</ChartContent>
          <ChartContent>1</ChartContent>
          <ChartContent>3</ChartContent>
          <ChartContent>1</ChartContent>
          <ChartContent>1</ChartContent>
          <ChartContent>3</ChartContent>
          <ChartContent>1</ChartContent>
          <ChartContent>1</ChartContent>
          <ChartContent>3</ChartContent>
          <ChartContent>1</ChartContent>
          <ChartContent>1</ChartContent>
        </Slider>
      </ChartBox>
    </>
  );
};

export default ChartContainer;

const ChartBox = styled.div`
  width: 600px;
  background-color: white;
  height: 500px;
`;

const ChartContent = styled.div`
  width: 400px;
  height: 500px;
  background-color: beige;
  border: 1px solid black;
  color: white;
`;
const Co = styled.div`
  width: 30px;
  height: 30px;
`;
