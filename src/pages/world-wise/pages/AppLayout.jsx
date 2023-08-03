import React from 'react';
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import styles from './AppLayout.module.css';
import { useAuth } from '../contexts/FakeAuthContext';
import User from './../components/User';
import { useCities } from '../contexts/CitiesContext';
import HomeBtn from '../../home-page/components/HomeBtn';

const AppLayout = (props) => {
  // const {} = props;
  const { isAuthenticated } = useAuth();
  // const { getCities } = useCities();
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {isAuthenticated && <User />}
    </div>
  );
};

export default AppLayout;
