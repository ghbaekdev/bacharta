import { useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { getWeather } from "../../api/weatherAPI";
import WeatherOverlay from "./components/WeatherOverlay/WeatherOverlay";
import Buttons from "./components/Buttons/Buttons";
import MicrodustsOverlay from "./components/MicrodustsOverlay/MicrodustsOverlay";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";

const Maps = () => {
  const [level] = useState(13);
  const [dataSwitch, setDataSwitch] = useState(true);

  const { status, data } = useQuery(["weatherData"], () => getWeather(), {
    retry: false,
  });

  if (status === "loading") return <Loading />;

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
