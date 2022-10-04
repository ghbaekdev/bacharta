export interface LineChartProps {
  type: string;
  data: Data;
}

export interface Data {
  labels: string[];
  dataset: Dataset[];
}

export interface Dataset {
  data: number[];
  label: string;
  borderColor: string;
  backgroundColor: string;
  fill: boolean;
  lineTension: number;
}

export interface ExchageProps {}
