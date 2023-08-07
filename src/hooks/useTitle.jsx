import React from 'react';
import { useLocation } from 'react-router-dom';

const useTitle = (icon) => {
  // const {} = icon;
  const location = useLocation();

  const pageIcon = document.querySelector('link[rel~="icon"]');
  pageIcon.href = icon;

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
