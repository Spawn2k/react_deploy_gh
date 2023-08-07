import './assets/scss/main.scss';

import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import ReactQuiz from './pages/react-quiz/ReactQuiz';
import { MoviesProvider } from './pages/use-popcorn/context/MovieReducer';
import { QuizProvider } from './pages/react-quiz/context/QuizContext';
import Sandbox from './pages/sandbox/Sandbox';
import CityList from './pages/world-wise/components/CityList';
import CountryList from './pages/world-wise/components/CountryList';
import City from './pages/world-wise/components/City';
import Form from './pages/world-wise/components/Form';
import ProtectedRoutes from './pages/world-wise/pages/ProtectedRoutes';
import { Provider } from 'react-redux';
import store from './pages/react-pizza/store';
import Home from './pages/react-pizza/ui/Home';
import Menu, { loader as menuLoader } from './pages/react-pizza/features/menu/Menu';
import Cart from './pages/react-pizza/features/cart/Cart';
import CreateOrder, { action as createOrderAction } from './pages/react-pizza/features/order/CreateOrder';
import Order, { loader as orderIdLoader } from './pages/react-pizza/features/order/Order';
import { action as updateOrderAction } from './pages/react-pizza/features/order/UpdateOrder';
import Error from './pages/react-pizza/ui/Error';
import { Suspense, lazy } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import PageNotFound from './components/PageNotFound';

const Todo = lazy(() => import('./pages/todo/Todo'));
const UsePopcorn = lazy(() => import('./pages/use-popcorn/UsePopcorn'));
const WorldWise = lazy(() => import('./pages/world-wise/WorldWise'));
const AppLayout = lazy(() => import('./pages/world-wise/pages/AppLayout'));
const ReactPizza = lazy(() => import('./pages/react-pizza/ReactPizza'));
const HomepageWorldWise = lazy(() => import('./pages/world-wise/pages/HomepageWorldWise'));
const Login = lazy(() => import('./pages/world-wise/pages/Login'));
const Pricing = lazy(() => import('./pages/world-wise/pages/Pricing'));
const Product = lazy(() => import('./pages/world-wise/pages/Product'));
const HomePage = lazy(() => import('./pages/home-page/HomePage'));

const router = createHashRouter([
  {
    path: '*',
    element: <PageNotFound />,
  },
  {
    path: '',
    element: (
      <Suspense fallback={<LoadingSpinner bgColor="#0e172a" borderColor="#5eead4" />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: 'todo-list',
    element: (
      <Suspense fallback={<LoadingSpinner bgColor="#eee" borderColor="#f5ba13" />}>
        <Todo />
      </Suspense>
    ),
  },
  {
    path: 'use-popcorn',
    element: (
      <MoviesProvider>
        <Suspense fallback={<LoadingSpinner bgColor="#212529" borderColor="#6741d9" />}>
          <UsePopcorn />
        </Suspense>
      </MoviesProvider>
    ),
  },
  {
    path: 'react-quiz',
    element: (
      <QuizProvider>
        <ReactQuiz />
      </QuizProvider>
    ),
  },
  {
    path: 'react-pizza',
    element: (
      <Provider store={store}>
        <Suspense fallback={<LoadingSpinner bgColor="#FFFFFF" borderColor="#FACC15" />}>
          <ReactPizza />
        </Suspense>
      </Provider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'order/new',
        element: <CreateOrder />,
        errorElement: <Error />,
        action: createOrderAction,
      },
      {
        path: 'order/:orderId',
        element: <Order />,
        errorElement: <Error />,
        action: updateOrderAction,
        loader: orderIdLoader,
      },
    ],
  },
  {
    path: 'word-wise',
    element: (
      <Suspense fallback={<LoadingSpinner bgColor="#2d3439" borderColor="#00c46a" />}>
        <WorldWise />
      </Suspense>
    ),
    children: [
      {
        path: 'app',
        element: (
          <ProtectedRoutes>
            <AppLayout />
          </ProtectedRoutes>
        ),
        children: [
          {
            path: 'cities',
            element: <CityList />,
          },
          {
            path: 'countries',
            element: <CountryList />,
          },
          {
            path: 'cities/:id',
            element: <City />,
          },
          {
            path: 'form',
            element: <Form />,
          },
        ],
      },
      {
        index: true,
        element: <HomepageWorldWise />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'product',
        element: <Product />,
      },
    ],
  },

  {
    path: 'sandbox',
    element: <Sandbox />,
  },
]);

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
  // return <RouterProvider router={router} />;
}

export default App;
