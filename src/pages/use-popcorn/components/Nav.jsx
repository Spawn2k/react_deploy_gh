import React from 'react';
import { useMovies } from '../context/MovieReducer';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  // const {} = props;

  const { query, getQuery, searchList } = useMovies();
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => getQuery(e.target.value)}
      />
      <p className="num-results">
        Found <strong>{searchList?.length}</strong> results
      </p>
    </nav>
  );
};

export default Nav;
