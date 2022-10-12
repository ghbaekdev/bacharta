export interface LineChartProps {
  data: Data;
}

export interface Data {
  type: string;
  labels: string[];
  dataset: Dataset[];
}

export interface Dataset {
  type: string;
  data: number[];
  label: string;
  borderColor: string;
  backgroundColor: string;
  fill: boolean;
  lineTension: number;
}

export interface TempChartProps {
  aplyBgnD: { _text: string };
  cntySgn: { _text: string };
  currSgn: { _text: string };
  fxrt: { _text: string };
  imexTp: { _text: string };
  mtryUtNm: { _text: string };
}
