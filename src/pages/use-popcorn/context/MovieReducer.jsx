/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from 'react';

const MoviesContext = createContext();
const KEY = '30579a3d';
//https://www.omdbapi.com/?apikey=30579a3d&s=Wick

const reducer = (state, action) => {
  switch (action.type) {
    case 'isLoadingSearch':
      return {
        ...state,
        isLoadingSearch: action.payload,
      };
    case 'isLoadingMovieDetails':
      return {
        ...state,
        isLoadingMovieDetails: action.payload,
      };
    case 'open1':
      return {
        ...state,
        isOpen1: !state.isOpen1,
      };
    case 'open2':
      return {
        ...state,
        isOpen2: !state.isOpen2,
      };
    case 'queryMovies':
      return {
        ...state,
        query: action.payload,
      };
    case 'fetch/Movies':
      return {
        ...state,
        searchList: action.payload,
      };
    case 'movie/id':
      return {
        ...state,
        userRating: null,
        movieId: state.movieId === action.payload ? null : action.payload,
      };
    case 'movie/info':
      return {
        ...state,
        movieInfo: action.payload,
      };
    case 'movies/userRating':
      return {
        ...state,
        userRating: action.payload,
      };
    case 'movies/addMovie':
      return {
        ...state,
        movieId: null,
        watchedMovies: [...state.watchedMovies, action.payload],
      };
    case 'movies/delete':
      return {
        ...state,
        watchedMovies: state.watchedMovies.filter((movie) => movie.imdbID !== action.payload),
      };
    case 'movies/error':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  isOpen1: false,
  isOpen2: false,
  query: '',
  searchList: [],
  movieInfo: {},
  movieId: null,
  userRating: null,
  watchedMovies: [],
  isLoadingSearch: false,
  isLoadingMovieDetails: false,
  error: '',
};

const tempQuery = `http://www.omdbapi.com/?apikey=${KEY}&s=Wick`;

const MoviesProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isOpen1,
    query,
    searchList,
    movieId,
    movieInfo,
    userRating,
    watchedMovies,
    isOpen2,
    isLoadingSearch,
    isLoadingMovieDetails,
    error,
  } = state;

  useEffect(() => {
    const controller = new AbortController();

    setError('');
    if (!query) return;
    const fetchMovies = async () => {
      setIsLoadingSearch(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, {
        signal: controller.signal,
      });
      const data = await res.json();
      if (data.Response === 'False') setError('Movie not Found');
      return data;
    };

    fetchMovies()
      .then((data) => dispatch({ type: 'fetch/Movies', payload: data.Search }))
      .catch((e) => setError('Ups something went wrong plz retry'))
      .finally(() => {
        setIsLoadingSearch(false);
      });
    return () => {
      controller.abort();
    };
  }, [query]);

  useEffect(() => {
    if (!movieId) {
      document.title = 'usePopcorn';
      return;
    }

    const fetchMovie = async () => {
      setIsLoadingMovieDetails(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=&i=${movieId}`);
      const data = await res.json();
      return data;
    };

    fetchMovie()
      .then((data) => {
        document.title = data.Title;

        dispatch({ type: 'movie/info', payload: data });
      })
      .catch((e) => setError('Ups something went wrong plz retry'))
      .finally(() => setIsLoadingMovieDetails(false));

    return () => {};
  }, [movieId]);

  useEffect(() => {
    if (!movieId) return;
    const handleKeyUp = (e) => {
      if (e.code.toLowerCase() === 'Escape'.toLowerCase()) getMovieId(null);
    };
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [movieId]);

  const setIsLoadingSearch = (bool) => {
    dispatch({ type: 'isLoadingSearch', payload: bool });
  };
  const setIsLoadingMovieDetails = (bool) => {
    dispatch({ type: 'isLoadingMovieDetails', payload: bool });
  };

  const setIsOpen1 = () => {
    dispatch({ type: 'open1' });
  };
  const setIsOpen2 = () => {
    dispatch({ type: 'open2' });
  };

  const getQuery = (value) => {
    dispatch({ type: 'queryMovies', payload: value });
  };

  const getMovieId = (id) => {
    dispatch({ type: 'movie/id', payload: id });
  };

  const getUserRating = (rating) => {
    dispatch({ type: 'movies/userRating', payload: rating });
  };

  const addMovie = (movie) => {
    if (movie.userRating === 0) return;
    dispatch({ type: 'movies/addMovie', payload: movie });
  };

  const deleteMovie = (id) => {
    dispatch({ type: 'movies/delete', payload: id });
  };

  const setError = (error) => {
    dispatch({ type: 'movies/error', payload: error });
  };

  return (
    <MoviesContext.Provider
      value={{
        isOpen1,
        setIsOpen1,
        getQuery,
        query,
        searchList,
        movieId,
        getMovieId,
        movieInfo,
        getUserRating,
        userRating,
        addMovie,
        watchedMovies,
        deleteMovie,
        setIsOpen2,
        isOpen2,
        isLoadingSearch,
        isLoadingMovieDetails,
        error,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMovies = () => {
  const context = useContext(MoviesContext);
  if (context === undefined) throw new Error('Movies context was used outside the MoviesProvider');
  return context;
};

export { useMovies, MoviesProvider };
