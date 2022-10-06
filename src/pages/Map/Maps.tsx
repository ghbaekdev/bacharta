import { useState, useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";
import { getWeather } from "../../api/weatherAPI";
import { MARKER_DATA } from "../../data/MARKER_DATA";
import Overlay from "./components/Overlay/Overlay";
import Buttons from "./components/Buttons/Buttons";
import Checkbox from "./components/Checkbox/Checkbox";
import axios from "axios";
import { getMicrodustsLevel } from "../../api/microdustsAPI";

const Maps = () => {
  const [level, setLevel] = useState(13);
  const [dataSwitch, setDataSwitch] = useState("weather");

  useEffect(() => {
    getWeather(35.17989493738095, 129.07481938748694).then((response) =>
      console.log(response)
    );
  }, []);

  const weatherSwitch = () => {
    setDataSwitch("weather");
  };
  const microdustsSwitch = () => {
    setDataSwitch("microdusts");
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
      {dataSwitch === "weather" &&
        MARKER_DATA.map((city) => <Overlay data={city} key={city.title} />)}

      {dataSwitch === "microdusts" && <Checkbox />}

      <Buttons
        weatherSwitch={weatherSwitch}
        microdustsSwitch={microdustsSwitch}
      />
    </Map>
  );
};
export default Maps;
