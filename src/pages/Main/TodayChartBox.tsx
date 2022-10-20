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
import axios from "axios";
import { CrimeProps, CovidProps } from "./ChartData/ChartData";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";

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
  const getCovid = async () => {
    const reponse = await axios.get("http://127.0.0.1:3001/covid");

    return reponse.data;
  };
  const getCrime = async () => {
    const { data } = await axios.get("http://127.0.0.1:3001/crime");

    return data;
  };

  const covidData = useQuery(["covid"], getCovid, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log(data, "covid Data");
    },
    onError: (e) => {
      console.log(e, "에러가 생겼어요");
    },
  });

  const crimeData = useQuery(["crime"], getCrime, {
    refetchOnWindowFocus: false,
    retry: 0,

    onSuccess: (data) => {
      console.log(data, "crime Data");
    },
    onError: (e) => {
      console.log(e, "에러가 생겼어요");
    },
  });

  const covidChartData = covidData?.data?.data[0];
  const crimeChartData = crimeData?.data?.data?.Result.City;

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

  const labels = crimeChartData
    ?.map((el: CrimeProps) => {
      return el["city-name"]?._text;
    })
    .slice(1, 8);

  const doughnutData = {
    labels,
    datasets: [
      {
        label: "성범죄자 지역별 통계 ",
        data: crimeChartData
          ?.map((el: CrimeProps) => {
            return el["city-count"]?._text;
          })
          .slice(1, 8),
        borderColor: "black",
        backgroundColor: [
          "rgb(247, 25, 73)",
          "rgb(217, 94, 0)",
          "rgb(245, 188, 45)",
          "rgb(100, 200, 78)",
          "rgb(102, 173, 252)",
          "rgb(96, 64, 255)",
          "rgb(255, 206, 86)",
          "rgb(232, 86, 255)",
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
          covidChartData?.cnt1,
          covidChartData?.cnt2,
          covidChartData?.cnt3,
          covidChartData?.cnt4,
          covidChartData?.cnt5,
          covidChartData?.cnt6,
          covidChartData?.cnt7,
          covidChartData?.cnt8,
        ],
        backgroundColor: "rgb(99, 161, 255)",
      },
    ],
  };

  if (covidData.isLoading && crimeData.isLoading) {
    return <Loading />;
  }

  if (covidData.isError && crimeData.isError) {
    return <div>error</div>;
  }

  return (
    <>
      <ChartContainer>
        <ChartBox>
          <Doughnut
            data={doughnutData}
            options={doughnutOptions}
            style={{
              width: "530px",
              height: "450px",
              backgroundColor: "white",
              padding: "20px",
              boxShadow: "10px 5px 5px gray",
            }}
          />
        </ChartBox>
        <ChartBox>
          <Line
            data={barData}
            options={barOptions}
            style={{
              width: "700px",
              height: "450px",
              backgroundColor: "white",
              boxShadow: "10px 5px 5px gray",
              marginRight: "10px",
            }}
          />
        </ChartBox>
      </ChartContainer>
    </>
  );
};

export default TodayChartBox;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 180px;
  margin-bottom: 120px;
  height: 700px;
`;

const ChartBox = styled.div`
  width: 520px;
  height: 300px;
`;
