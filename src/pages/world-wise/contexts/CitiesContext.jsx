/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useReducer } from 'react';

const CitiesContext = createContext();
const BASE_URL = 'https://api.jsonbin.io/v3/b/64c653cb9d312622a388efac/';
// const BASE_URL = 'http://localhost:8000/';

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'cities/loaded':
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case 'city/loaded':
      return {
        ...state,
        currentCity: action.payload,
      };
    case 'city/created':
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    case 'city/deleted':
      return {
        ...state,
        cities: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: '',
};

const CitiesProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, isLoading, currentCity, error } = state;

  useEffect(() => {
    const fetchCities = async () => {
      dispatch({ type: 'loading', payload: true });
      const res = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
          'X-Access-Key': '$2b$10$291FcDZEGzeobbCyMye5QOWdhn1sxnOpNRCOWq6C/r.QHSmjLBSA6',
        },
      });
      const data = await res.json();

      return data.record.cities;
    };

    fetchCities()
      .then((data) => dispatch({ type: 'cities/loaded', payload: data }))
      .catch((e) => dispatch({ type: 'rejected', payload: 'There was an error loading cities' }))
      .finally(() => dispatch({ type: 'loading', payload: false }));

    return () => {};
  }, []);

  const getCity = useCallback(
    (id) => {
      const currentCity = cities.find((city) => Number(city.id) === Number(id));
      dispatch({ type: 'city/loaded', payload: currentCity });
    },
    [cities]
  );

  const deleteCity = (id) => {
    const newCities = cities.filter((city) => Number(city.id) !== Number(id));
    const obj = {
      cities: newCities,
    };

    const fetchCities = async () => {
      dispatch({ type: 'loading', payload: true });
      const res = await fetch(BASE_URL, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
          'X-Access-Key': '$2b$10$291FcDZEGzeobbCyMye5QOWdhn1sxnOpNRCOWq6C/r.QHSmjLBSA6',
          'Content-type': 'application/json',
        },
      });
      const data = await res.json();
      return data;
    };

    fetchCities()
      .then((data) => dispatch({ type: 'city/deleted', payload: newCities }))
      .catch((e) => console.log(e))
      .finally(() => dispatch({ type: 'loading', payload: false }));
  };

  const createCity = (city) => {
    const id = Date.now();
    city.id = id;
    cities.push(city);
    const obj = {
      cities,
    };

    const fetchCities = async () => {
      dispatch({ type: 'loading', payload: true });
      const res = await fetch(BASE_URL, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
          'X-Access-Key': '$2b$10$291FcDZEGzeobbCyMye5QOWdhn1sxnOpNRCOWq6C/r.QHSmjLBSA6',
          'Content-type': 'application/json',
        },
      });
      const data = await res.json();
      return data;
    };

    fetchCities()
      .then()
      .catch((e) => console.log(e))
      .finally(() => dispatch({ type: 'loading', payload: false }));
  };

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, error, getCity, deleteCity, createCity }}>
      {children}
    </CitiesContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error('Cities context was used outside the CititiesProvider ');
  return context;
};

export { CitiesProvider, useCities };
