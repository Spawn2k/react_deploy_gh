import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { useCities } from '../contexts/CitiesContext';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

const CityItem = (props) => {
  const {
    city: {
      cityName,
      country,
      emoji,
      notes,
      date,
      id,
      position: { lat, lng },
    },
    // position: { lat, lng },
  } = props;

  const { currentCity, deleteCity } = useCities();

  const handleClick = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity.id ? styles['cityItem--active'] : ''} `}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button onClick={handleClick} className={styles.deleteBtn}>
         <span></span>
        </button>
      </Link>
    </li>
  );
};

export default CityItem;
