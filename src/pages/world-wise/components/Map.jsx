import React, { useEffect, useState } from 'react';
import styles from './Map.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import Button from './Button';
import { useCities } from '../contexts/CitiesContext';
import useGeoLocation from '../hooks/useGeoLocation';
import { useUrlPosition } from '../hooks/useUrlPosition';
import HomeBtn from '../../home-page/components/HomeBtn';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
const Map = (props) => {
  // const {} = props;
  const [zoom, setZoom] = useState();
  const { cities } = useCities();
  const { getPosition, isLoading, position, setPosition } = useGeoLocation();
  const defaultPosition = position.length > 0 ? position : [52.143602398455315, 10.025024414062502];
  const [lat, lng] = useUrlPosition();

  useEffect(() => {
    if (lat && lng) {
      setPosition([lat, lng]);
    }
    return () => {};
  }, [lat, lng, setPosition]);

  useEffect(() => {

    const onRezie = (e) => {
      const media = window.matchMedia("screen and (max-width:800px)");
      if(media.matches) {
        setZoom(false)
      } else {
        setZoom(true)
      }
      
    }
    window.addEventListener('resize', onRezie)
  }, [zoom])

  console.log(zoom)

  return (
    <div className={styles.mapContainer}>
      {position.length < 1 && (
        <Button onClick={getPosition} type={'position'}>
          {isLoading ? 'Loading...' : 'Use your position'}
        </Button>
      )}

      <MapContainer key={zoom} className={styles.map} center={defaultPosition} zoom={6} scrollWheelZoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <MapEvents setPosition={setPosition} />
        <ChangeCenter position={defaultPosition} />
      </MapContainer>
      {/* <HomeBtn color={'#00c46a'} /> */}
    </div>
  );
};

const ChangeCenter = ({ position }) => {
  const [lat, lng] = position;
  const map = useMap();
  const curPosition = {
    lat,
    lng,
  };

  map.setView(curPosition);
  return null;
};

const MapEvents = (props) => {
  const { setPosition } = props;
  const navigate = useNavigate();

  useMapEvents({
    click(e) {
      const {
        latlng: { lat, lng },
      } = e;
      setPosition([lat, lng]);
      navigate(`form?lat=${lat}&lng=${lng}`);
    },
  });
  return false;
};
export default Map;
