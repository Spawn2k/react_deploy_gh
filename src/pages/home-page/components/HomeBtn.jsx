import React from 'react';

import { Link } from 'react-router-dom';

const HomeBtn = (props) => {
  const { to = '/', color = 'black' } = props;

  return (
    <div style={{ backgroundColor: color }} className={`m-home-btn`}>
      <Link to={to}>
        <svg className="icon" viewBox="0 0 24 24" width="100">
          <path
            stroke={color}
            d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default HomeBtn;
