import React from 'react';
import styles from './PageNav.module.css';
import Logo from './../components/Logo';
import { NavLink } from 'react-router-dom';

const PageNav = (props) => {
  // const {} = props;
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to={'/word-wise/pricing'}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={'/word-wise/product'}>Product</NavLink>
        </li>
        <li>
          <NavLink className={styles.ctaLink} to={'/word-wise/login'}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
