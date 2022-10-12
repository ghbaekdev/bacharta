import { useState, useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";
import { getWeather } from "../../api/weatherAPI";
import { MARKER_DATA } from "../../data/MARKER_DATA";
import WeatherOverlay from "./components/WeatherOverlay/WeatherOverlay";
import Buttons from "./components/Buttons/Buttons";
import Checkbox from "./components/Checkbox/Checkbox";
import axios from "axios";
import { getMicrodustsLevel } from "../../api/microdustsAPI";
import Microdusts from "./components/MicrodustsOverlay/MicrodustsOverlay";

const Maps = () => {
  const [level, setLevel] = useState(13);
  const [dataSwitch, setDataSwitch] = useState(true);

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
  //   getMicrodustsLevel(4).then((response) => console.log(response.data));
  // });

  return (
    <Map
      center={{ lat: 34.489127040010096, lng: 127.73040266182423 }}
      style={{ width: "100%", height: "1000px", position: "relative" }}
      level={level}
    >
      {dataSwitch ? (
        MARKER_DATA.map((city) => (
          <WeatherOverlay data={city} key={city.title} />
        ))
      ) : (
        <Microdusts />
      )}

      <Buttons
        weatherSwitch={weatherSwitch}
        microdustsSwitch={microdustsSwitch}
      />
    </Map>
  );
};
export default Maps;
