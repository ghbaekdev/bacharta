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

export interface ExchageProps {
  aplyBgnD: { _text: string };
  cntySgn: { _text: string };
  currSgn: { _text: string };
  fxrt: { _text: string };
  imexTp: { _text: string };
  mtryUtNm: { _text: string };
}
