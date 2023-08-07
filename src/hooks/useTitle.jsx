import React from 'react';
import { useLocation } from 'react-router-dom';

const useTitle = (props) => {
  // const {} = props;

  const location = useLocation();
  const getTitle = location.pathname
    .split('/')[1]
    .replace('/', '')
    .replace('-', ' ')
    .split(' ')
    .map((word) => {
      const ucFirst = word[0].toLocaleUpperCase();
      return word.replace(word[0], ucFirst);
    })
    .join(' ');
  return { getTitle };
};

export { useTitle };
