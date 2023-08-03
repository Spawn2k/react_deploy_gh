/* eslint-disable react-refresh/only-export-components */
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from 'react';

import styles from './Form.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BackButton from './BackButton';
import Button from './Button';
import { useCities } from '../contexts/CitiesContext';
import Message from './Message';
import Spinner from './Spinner';

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [emoji, setEmoji] = useState('');
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const { createCity } = useCities();
  const [geocodingError, setGeocodingError] = useState('');
  const navigate = useNavigate();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);

  useEffect(() => {
    setGeocodingError('');
    setIsLoadingGeocoding(true);
    const fetchCityData = async () => {
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
      const data = await res.json();
      return data;
    };
    fetchCityData()
      .then((data) => {
        if (!data.countryCode) throw new Error(`That doesn't seem to be a city. Click Somewhere else 🙂`);
        setCityName(data.city);
        setCountry(data.countryName || data.locality || '');
        setEmoji(convertToEmoji(data.countryCode));
      })
      .catch((e) => setGeocodingError(e.message))
      .finally(() => setIsLoadingGeocoding(false));
    return () => {};
  }, [lat, lng]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = {
      cityName,
      country,
      date,
      notes,
      emoji,
      position: { lat, lng },
    };
    createCity(newCity);
    navigate('/word-wise/app/cities');
  };
  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng) return <Message message={'Start by clicking somwhere on the map'} />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" onChange={(e) => setCityName(e.target.value)} value={cityName} />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>

        <DatePicker id={'date'} onChange={(date) => setDate(date)} selected={date} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea id="notes" onChange={(e) => setNotes(e.target.value)} value={notes} />
      </div>

      <div className={styles.buttons}>
        <Button type={'primary'}>Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
