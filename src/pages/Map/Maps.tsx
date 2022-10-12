import { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { MARKER_DATA } from '../../data/MARKER_DATA';
import Overlay from './components/Overlay/Overlay';

const Maps = () => {
  const [level, setLevel] = useState(13);

  return (
    <Map
      center={{ lat: 34.489127040010096, lng: 127.73040266182423 }}
      style={{ width: '100%', height: '1000px' }}
      level={level}
    >
      {MARKER_DATA.map((city) => (
        <Overlay data={city} key={city.title} />
      ))}
    </Map>
  );
};
export default Maps;
