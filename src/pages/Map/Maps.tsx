import { useState, useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";
// import { getWeather } from "../../api/weatherAPI";
import { WEATHER_DATA } from "../../data/WEATHER_DATA";
import WeatherOverlay from "./components/WeatherOverlay/WeatherOverlay";
import Buttons from "./components/Buttons/Buttons";
// import Checkbox from "./components/Checkbox/Checkbox";
// import { useQuery } from "@tanstack/react-query";
// import Loading from "../../components/Loading/Loading";

const Maps = () => {
  const [level, setLevel] = useState(13);
  const [dataSwitch, setDataSwitch] = useState(true);
  // const [temperature, setTemperature] = useState();

  // const {
  //   status,
  //   data: { data },
  // } = useQuery(["weatherData"], () => getWeather());
  // console.log(data);

  // if (status === "loading") return <Loading />;

  // useEffect(() => {
  //   getWeather(35.17989493738095, 129.07481938748694).then((response) =>
  //   );
  // }, []);

  const weatherSwitch = () => {
    setDataSwitch(true);
  };
  const microdustsSwitch = () => {
    setDataSwitch(false);
  };

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`
  //     )
  //     .then((res) => {
  //       let weatherIcons;
  //       switch (res.data.weather[0].main) {
  //         case "Clear":
  //           weatherIcons = sun;
  //           break;
  //         case "Clouds":
  //           weatherIcons = clouds;
  //           break;
  //         case "Rain":
  //           weatherIcons = rain;
  //           break;
  //         case "Snow":
  //           weatherIcons = snow;
  //           break;
  //         default:
  //           weatherIcons = sun;
  //       }
  //       setTemperature(res.data);
  //       setIcon(weatherIcons);
  //     });

  //   // api.getWeather(lat, lng).then((res) => console.log(res.data));
  // }, []);

  return (
    <Map
      center={{ lat: 34.489127040010096, lng: 127.73040266182423 }}
      style={{ width: "100%", height: "1000px", position: "relative" }}
      level={level}
    >
      {WEATHER_DATA.map((weather) => (
        <WeatherOverlay data={weather} />
      ))}
      <Buttons
        weatherSwitch={weatherSwitch}
        microdustsSwitch={microdustsSwitch}
      />
    </Map>
  );
};
export default Maps;
