import React from 'react';
import { useMovies } from '../context/MovieReducer';
import StarRating from './StarRating';

const MovieInfo = (props) => {
  // const {} = props;
  const {
    movieInfo: {
      Title: title,
      Year: year,
      Genre: genre,
      Plot: plot,
      Released: release,
      Actors: actors,
      Poster: poster,
      imdbRating,
      Director: director,
      Runtime: runtime,
      imdbID,
    },
    getUserRating,
    userRating,
    addMovie,
    getMovieId,
    watchedMovies,
  } = useMovies();

  const hasUserRating = watchedMovies?.filter((movie) => movie.imdbID === imdbID)[0]?.userRating;

  const newMovie = {
    imdbID,
    Title: title,
    imdbRating: Number(imdbRating),
    userRating: Number(userRating),
    Runtime: Number(runtime?.split(' ')[0]),
    Poster: poster,
    Year: year,
  };

  return (
    <div className="details">
      <header>
        <button onClick={() => getMovieId(null)} className="btn-back">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M249.38 336L170 256l79.38-80m-68.35 80H342"
            ></path>
          </svg>
        </button>
        <img src={poster} alt="" />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {release} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p>
            <span>⭐</span> {imdbRating} IMBD rating
          </p>
        </div>
      </header>
      <section>
        <div className="rating">
          {hasUserRating ? (
            <p>You ratet this movie with {hasUserRating} ⭐</p>
          ) : (
            <StarRating size={24} maxRating={10} onSetRating={getUserRating} />
          )}
          {!hasUserRating && (
            <button onClick={() => addMovie(newMovie)} className="btn-add">
              + Add to list
            </button>
          )}
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Director {director}</p>
      </section>
    </div>
  );
};

export default MovieInfo;
