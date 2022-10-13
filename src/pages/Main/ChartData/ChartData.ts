export interface CovidProps {
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

export interface CrimeProps {
  "city-count": { _text: string };
  "city-name": { _text: string };
}

export interface ExchangeProps {
  bkpr: string;
  cur_nm: string;
  cur_unit: string;
  deal_bas_r: string;
  kftc_bkpr: string;
  kftc_deal_bas_r: string;
  result: number;
  ten_dd_efee_r: string;
  ttb: string;
  tts: string;
  yy_efee_r: string;
  flag: {
    id: number;
    flag_url: JSX.Element;
    name: string;
  };
}

export interface ExchangeArrayProps {
  exchangeData: ExchangeProps[];
}
