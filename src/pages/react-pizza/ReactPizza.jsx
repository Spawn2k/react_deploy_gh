import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './ui/Loader';
import Header from './ui/Header';
import CartOverview from './features/cart/CartOverview';

import './index.css';
import HomeBtn from '../home-page/components/HomeBtn';

const ReactPizza = (props) => {
  // const {} = props;
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div>
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <HomeBtn color={'#fbbf24'} />
      <CartOverview />
    </div>
  );
};

export default ReactPizza;
