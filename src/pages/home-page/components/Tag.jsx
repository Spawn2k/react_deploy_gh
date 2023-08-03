import React from 'react';
import { Link } from 'react-router-dom';

const Tag = (props) => {
  const {
    tag: { name, link },
  } = props;
  return (
    <Link className="tag" to={link}>
      <span>{name}</span>
    </Link>
  );
};

export default Tag;
