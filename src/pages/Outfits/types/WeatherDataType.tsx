export interface ForcastData {
  city: string;
  list: {
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
      humidity: number;
      temp_max: number;
      temp_mix: number;
    };
    weather: {
      description: string;
      main: string;
      icon: string;
    }[];
  }[];
}
