import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const TodayChartBox = () => {
  interface CovidProps {
    cnt1: string;
    cnt2: string;
    cnt3: string;
    cnt4: string;
    cnt5: string;
    cnt6: string;
    cnt7: string;
    cnt8: string;
    mmdd1: string;
    mmdd2: string;
    mmdd3: string;
    mmdd4: string;
    mmdd5: string;
    mmdd6: string;
    mmdd7: string;
    mmdd8: string;
    mmddhh: string;
    rate1: string;
    rate2: string;
    rate3: string;
    rate4: string;
    rate5: string;
    rate6: string;
    rate7: string;
    rate8: string;
  }
  const [covidData, setCovidData] = useState<Array<CovidProps>>([]);
  useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:3001/covid")
        .then((res) => setCovidData(res.data.data));
    } catch {
      alert("데이터가 없습니다.");
    }
  }, []);

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 15,
          },
        },
      },
      title: {
        display: true,
        text: "세계 나라의 환율 추이",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const lineData = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "black",
        font: {
          size: 40,
        },
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const barOptions = {
    plugins: {
      title: {
        display: true,
        text: "주간 코로나 감염 발생자 추이",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const date = new Date();
  const fullDay = (plusDay: number) =>
    `${date.getFullYear()}${
      date.getMonth() > 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }${
      date.getDate() < 10
        ? `0${date.getDate() + plusDay}`
        : date.getDate() + plusDay
    }`;

  const barLabels = new Array(7).fill("").map((arr, idx) => {
    return fullDay(-5 + idx);
  });
  const barData = {
    labels: barLabels,
    datasets: [
      {
        fill: true,
        label: "주간 코로나 환자 발생 추이",
        data: [
          covidData[0]?.cnt1,
          covidData[0]?.cnt2,
          covidData[0]?.cnt3,
          covidData[0]?.cnt4,
          covidData[0]?.cnt5,
          covidData[0]?.cnt6,
          covidData[0]?.cnt7,
          covidData[0]?.cnt8,
        ],
        backgroundColor: "rgb(99, 161, 255)",
      },
    ],
  };

  return (
    <>
      {covidData.length === 0 ? (
        "렌더링 안돼유"
      ) : (
        <>
          <ChartContainer>
            <Line
              data={lineData}
              options={lineOptions}
              style={{
                width: "650px",
                height: "400px",
                backgroundColor: "white",
                boxShadow: "10px 5px 5px gray",
              }}
            />

            <Line
              data={barData}
              options={barOptions}
              style={{
                width: "650px",
                height: "400px",
                backgroundColor: "white",
                boxShadow: "10px 5px 5px gray",
                marginRight: "10px",
              }}
            />
          </ChartContainer>
        </>
      )}
    </>
  );
};

export default TodayChartBox;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 70px;
  margin-bottom: 120px;
  overflow: scroll;
`;
