import { faker } from "@faker-js/faker";

export const lineOptions = {
  responsive: false,
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const lineData = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "black",
      font: {
        size: 40,
      },
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const barOptions = {
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
    date.getMonth() < 10
      ? `0${date.getMonth() + plusDay}`
      : date.getMonth() + plusDay
  }${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;

const barLabels = new Array(7).fill("").map((arr, idx) => {
  return fullDay(idx);
});
export const barData = {
  labels: barLabels,
  datasets: [
    {
      label: "Dataset 1",
      data: barLabels.map(() =>
        faker.datatype.number({ min: -1000, max: 1000 })
      ),
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: barLabels.map(() =>
        faker.datatype.number({ min: -1000, max: 1000 })
      ),
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: barLabels.map(() =>
        faker.datatype.number({ min: -1000, max: 1000 })
      ),
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};
