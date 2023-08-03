import React from 'react';
import { Link } from 'react-scroll';

const OnScrollHome = (props) => {
  return (
    <Link className="m-icon-wrapper" offset={-110} duration={100} activeClass="active" smooth spy to="about">
      <div>
        <svg className="icon" viewBox="0 0 24 24" width="100">
          <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z" />
        </svg>
      </div>
    </Link>
  );
};

export default OnScrollHome;
