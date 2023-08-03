import { useSearchParams } from 'react-router-dom';

const useUrlPosition = (props) => {
  // const {} = props;
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return [lat, lng];
};

export { useUrlPosition };
