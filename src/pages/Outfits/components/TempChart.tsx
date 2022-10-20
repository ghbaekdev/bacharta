import React from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { WeatherForcastState } from "../Data/WeatherForcastData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Chart } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TempChart = () => {
  const [wetherForcast] = useRecoilState(WeatherForcastState);
  const { list } = wetherForcast;

  let day = "";
  let mdArray: string[] = [];
  let hourArray: string[] = [];
  let humidityArray: number[] = [];
  let tempArray: number[] = [];
  let labelsArray: string[] = [];

  const hourlyWeathers = list?.map((weatherObject) => {
    let date = new Date(weatherObject.dt_txt);
    let hoursToString = weatherObject.dt_txt.toString();
    let hours = hoursToString.split(" ")[1];

    const monthDate = `${("0" + (date.getMonth() + 1)).slice(-2)}-${(
      "0" + date.getDate()
    ).slice(-2)}`;

    const mdValue = day === monthDate ? "" : monthDate;
    if (day !== mdValue) {
      day = monthDate;
    }
    mdArray.push(mdValue);
    hourArray.push(hours);
    humidityArray.push(weatherObject.main.humidity);
    tempArray.push(weatherObject.main.temp);
    labelsArray.push(`${mdValue} ${hours} `);
  });

  const labels = labelsArray;
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },

    stacked: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: 7,
          padding: 20,
          font: {
            family: "Pretendard, -apple-system, BlinkMacSystemFont",
            lineHeight: 1,
          },
        },
      },

      title: {
        display: false,
        text: "지역의 날씨",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        grid: {
          color: "#E3E3E3",
        },
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const Data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "기온",
        data: tempArray,
        borderWidth: 1,
        fill: false,
        borderColor: "#2542E6",
        backgroundColor: "#2542E6",
        yAxisID: "y",
        font: {
          size: 40,
        },
      },

      {
        type: "line" as const,
        label: "습도",
        data: humidityArray,
        borderWidth: 1,
        fill: false,
        borderColor: "#3B3B3B",
        backgroundColor: "#3B3B3B",
        yAxisID: "y1",
        font: {
          size: 40,
        },
      },
    ],
  };

  return (
    <Wrap>
      <Chart type="bar" data={Data} options={options} />
    </Wrap>
  );
};

const Wrap = styled.div`
  ${({ theme }) => theme.flexMixin("center", "space-between")}
  background-color: ${(props) => props.theme.white};
  padding: 40px 40px;
  width: 100%;
  height: 25rem;
  border-radius: ${(props) => props.theme.bordeRadius};
  box-shadow: ${(props) => props.theme.lowModalShadow};
`;

export default TempChart;
