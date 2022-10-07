import styled from "styled-components";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { faL } from "@fortawesome/free-solid-svg-icons";

ChartJS.register(
  ArcElement,
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

  interface CrimeProps {
    "city-count": { _text: string };
    "city-name": { _text: string };
  }
  const [covidData, setCovidData] = useState<Array<CovidProps>>([]);
  const [crimeData, setCrimeData] = useState<Array<CrimeProps>>([]);

  useEffect(() => {
    try {
      axios
        .get("http://127.0.0.1:3001/covid")
        .then((res) => setCovidData(res.data.data));
      axios
        .get("http://127.0.0.1:3001/crime")
        .then((res) => setCrimeData(res.data.data.Result.City));
    } catch {
      alert("데이터가 없습니다.");
    }
  }, []);

  console.log(
    crimeData.map((el) => {
      return el["city-count"]._text;
    }),
    "cd"
  );
  const doughnutOptions = {
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
        text: "성범죄자 지역별 통계 ",
        font: {
          size: 40,
        },
      },
    },
  };

  const labels = crimeData.map((el) => {
    return el["city-name"]._text;
  });

  const doughnutData = {
    labels,
    datasets: [
      {
        label: "성범죄자 지역별 통계 ",
        data: crimeData.map((el) => {
          return el["city-count"]._text;
        }),
        borderColor: "black",
        backgroundColor: [
          "rgb(247, 25, 73)",
          "rgb(217, 94, 0)",
          "rgb(245, 188, 45)",
          "rgb(100, 200, 78)",
          "rgb(102, 173, 252)",
          "rgb(96, 64, 255)",
          "rgb(255, 206, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 252)",
          "rgb(255, 159, 64)",
          "rgb(255, 206, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 252)",
          "rgb(255, 159, 64)",
          "rgb(255, 99, 132)",
          "rgb(17, 21, 217)",
          "rgb(255, 206, 86)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
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
      {covidData.length === 0 && crimeData.length === 0 ? (
        "렌더링 안돼유"
      ) : (
        <>
          <ChartContainer>
            <ChartBox>
              <Doughnut
                data={doughnutData}
                options={doughnutOptions}
                style={{
                  width: "650px",
                  height: "300px",
                  backgroundColor: "white",
                  boxShadow: "10px 5px 5px gray",
                }}
              />
            </ChartBox>

            <ChartBox>
              <Line
                data={barData}
                options={barOptions}
                style={{
                  width: "650px",
                  height: "600px",
                  backgroundColor: "white",
                  boxShadow: "10px 5px 5px gray",
                  marginRight: "10px",
                }}
              />
            </ChartBox>
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

const ChartBox = styled.div`
  width: "650px";
  height: "300px";
`;
