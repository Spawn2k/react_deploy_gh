import { useState } from 'react';

const useGeoLocation = (props) => {
  // const {} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState([]);

  const getPosition = () => {
    if (!navigator.geolocation) {
      console.error(`Your browser doesn't support Geolocation`);
    }
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
      }
    );
  };
  return { getPosition, isLoading, position, setPosition };
};

export default useGeoLocation;
