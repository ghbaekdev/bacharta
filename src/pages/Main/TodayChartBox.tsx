import styled from "styled-components";
import { Line, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ExchageProps } from "./MainTypes";
import {
  lineOptions,
  lineData,
  barData,
  barOptions,
} from "./ChartData/ChartData";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TodayChartBox = () => {
  useEffect(() => {
    axios
      .get(
        "http://apis.data.go.kr/1790387/covid19CurrentStatusHospitalizations/covid19CurrentStatusHospitalizationsJson?serviceKey=bysiTnIodqH0ErfxzVpu1IAmohs9AmZfVu8rIUOVEQYVGV%2FmQ2rGrAg6%2Be9hooDIp%2FaSq8JlSYEgh7hWRuQs%2BA%3D%3D"
      )
      .then((res) => res.data)
      .then((data) => console.log(data.response.result, "data"));
    //일일 발생현황 cnt1,2,3,4,5,6,7
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3001/atmosphere")
      .then((res) => res.data)
      .then((data) => console.log(data, "이거누먼가"));
    //일일 발생현황 cnt1,2,3,4,5,6,7
  }, []);
  return (
    <>
      <ChartContainer>
        <Line
          data={lineData}
          options={lineOptions}
          style={{
            width: "450px",
            height: "350px",
            backgroundColor: "white",
            boxShadow: "10px 5px 5px gray",
            marginRight: "10px",
          }}
        />

        <Bar
          data={barData}
          options={barOptions}
          style={{
            width: "500px",
            height: "350px",
            backgroundColor: "white",
            boxShadow: "10px 5px 5px gray",
            marginRight: "10px",
          }}
        />
      </ChartContainer>
    </>
  );
};

export default TodayChartBox;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 70px;
  margin-bottom: 120px;
`;
