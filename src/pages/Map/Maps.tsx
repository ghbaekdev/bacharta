import { useState, useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";
import { getWeather } from "../../api/weatherAPI";
// import { WEATHER_DATA } from "../../data/WEATHER_DATA";
import WeatherOverlay from "./components/WeatherOverlay/WeatherOverlay";
import Buttons from "./components/Buttons/Buttons";
import MicrodustsOverlay from "./components/MicrodustsOverlay/MicrodustsOverlay";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";
// import Checkbox from "./components/Checkbox/Checkbox";
// import { useQuery } from "@tanstack/react-query";
// import Loading from "../../components/Loading/Loading";

const Maps = () => {
  const [level, setLevel] = useState(13);
  const [dataSwitch, setDataSwitch] = useState(true);
  // const [temperature, setTemperature] = useState();

  const { status, data } = useQuery(["weatherData"], () => getWeather());
  console.log(data);

  if (status === "loading") return <Loading />;

  // useEffect(() => {
  //   getWeather(35.17989493738095, 129.07481938748694).then((response) =>
  //     console.log(response)
  //   );
  // }, []);

  const weatherSwitch = () => {
    setDataSwitch(true);
  };
  const microdustsSwitch = () => {
    setDataSwitch(false);
  };

  return (
    <Map
      center={{ lat: 34.489127040010096, lng: 127.73040266182423 }}
      style={{ width: "100%", height: "1000px", position: "relative" }}
      level={level}
    >
      <Buttons
        weatherSwitch={weatherSwitch}
        microdustsSwitch={microdustsSwitch}
      />

      {dataSwitch ? (
        data.data?.map((weather: any) => <WeatherOverlay data={weather} />)
      ) : (
        <MicrodustsOverlay />
      )}
    </Map>
  );
};
export default Maps;
