import { BrowserRouter, Navigate, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoutes from './pages/ProtectedRoutes';

import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';
import SpinnerFullPage from './components/SpinnerFullPage';
import HomeBtn from '../home-page/components/HomeBtn';
import { useTitle } from '../../hooks/useTitle';

// import Homepage from './pages/Homepage';
// import Product from './pages/Product';
// import Pricing from './pages/Pricing';
// import Login from './pages/Login';
// import AppLayout from './pages/AppLayout';
// import PageNotFound from './pages/PageNotFound';

const Homepage = lazy(() => import('./pages/HomepageWorldWise'));
const Login = lazy(() => import('./pages/Login'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function WorldWise() {
  const { getTitle } = useTitle('assets/icon/worldWise.svg');
  useEffect(() => {
    document.title = getTitle;
    return () => {
      document.title = '';
    };
  }, [getTitle]);
  return (
    <>
      <CitiesProvider>
        <AuthProvider>
          <div className="m-word-wise-wrapper">
            <Outlet />
            <HomeBtn color={'#00c46a'} />
          </div>
        </AuthProvider>
      </CitiesProvider>
    </>
  );
}

export default WorldWise;
