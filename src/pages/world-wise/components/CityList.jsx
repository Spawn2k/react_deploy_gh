import styles from './CityList.module.css';
import CityItem from './CityItem';
import { useCities } from '../contexts/CitiesContext';
import Spinner from './Spinner';
const BASE_URL = 'http://localhost:8000/';

const CityList = (props) => {
  // const {} = props;
  const { cities, isLoading, error } = useCities();

  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
