import React, { useRef } from 'react';
import { Link } from 'react-scroll';

const Nav = (props) => {
  const { onScrollShow, mediaQuery } = props;
  return (
    <nav className={`m-nav ${onScrollShow && 'on-scroll'}`}>
      <ul>
        <li>
          <Link offset={-110} duration={100} activeClass="active" smooth spy to="about">
            <span className="nav-bar"></span>
            <span className="nav-category">About</span>
          </Link>
        </li>
        <li>
          <Link offset={-110} duration={100} activeClass="active" smooth spy to="certificate">
            <span className="nav-bar"></span> <span className="nav-category">Zertifikate</span>
          </Link>
        </li>
        <li>
          <Link offset={-80} duration={100} activeClass="active" smooth spy to="projects">
            <span className="nav-bar"></span> <span className="nav-category">Projects</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
