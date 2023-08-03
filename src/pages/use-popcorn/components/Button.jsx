import React from 'react';
import { useMovies } from '../context/MovieReducer';

const Button = (props) => {
  const { children, isOpen } = props;
  const { getQuery, query } = useMovies();

  return (
    <button onClick={isOpen} className={'btn-toggle'}>
      {children}
    </button>
  );
};

export default Button;
