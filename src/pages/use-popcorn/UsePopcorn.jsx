import React, { useEffect } from 'react';

import Main from './components/Main';
import Nav from './components/Nav';
import Section from './components/Section';
import Button from './components/Button';
import { useMovies } from './context/MovieReducer';
import Loader from './components/Loader';
import List from './components/List';
import ListContent from './components/ListContent';
import Summary from './components/Summary';
import MovieInfo from './components/MovieInfo';
import HomeBtn from '../home-page/components/HomeBtn';
import { useTitle } from '../../hooks/useTitle';

const btnPlusSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
  </svg>
);

const btnMinusSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
  </svg>
);

const UsePopcorn = (props) => {
  // const {} = props;
  const {
    setIsOpen1,
    isOpen1,
    isOpen2,
    setIsOpen2,
    searchList,
    movieId,
    watchedMovies,
    isLoadingSearch,
    isLoadingMovieDetails,
    error,
  } = useMovies();
  const { getTitle } = useTitle('assets/icon/popCorn.svg');

  useEffect(() => {
    document.title = getTitle;
    return () => {
      document.title = '';
    };
  }, [getTitle]);

  return (
    <div className="m-use-popcorn-wraper">
      <Nav />
      <Main>
        <Section>
          <Button isOpen={setIsOpen1}>{isOpen1 ? btnPlusSvg : btnMinusSvg}</Button>
          {isLoadingSearch && <Loader />}
          {error && <p className="error"> ❌ {error}</p>}
          {!error && !isLoadingSearch && (
            <List
              isOpen={isOpen1}
              movies={searchList}
              render={(searchList) => <ListContent key={searchList.imdbID} movies={searchList} />}
            />
          )}
        </Section>

        <Section>
          <Button isOpen={setIsOpen2}>{isOpen2 ? btnPlusSvg : btnMinusSvg}</Button>
          {!movieId && !isOpen2 && <Summary />}
          {movieId && !isLoadingMovieDetails && <MovieInfo key={movieId} />}
          {isLoadingMovieDetails && <Loader />}
          {!movieId && (
            <List
              isOpen={isOpen2}
              movies={watchedMovies}
              render={(watchedMovies) => <ListContent key={watchedMovies.imdbID} movies={watchedMovies} />}
            />
          )}
        </Section>
      </Main>
      <HomeBtn color={'#6741d9'} />
    </div>
  );
};

export default UsePopcorn;
