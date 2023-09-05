import React from 'react';
import { useMovies } from '../context/MovieReducer';
const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const Summary = (props) => {
  // const {} = props;
  const { watchedMovies } = useMovies();
  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating));
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));
  const avgRuntime = average(watchedMovies.map((movie) => movie.Runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedMovies.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgUserRating.toFixed(1)} User</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgImdbRating.toFixed(1)} Imdb</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
