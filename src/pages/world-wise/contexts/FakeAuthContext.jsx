/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'logout':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

const initialState = {
  user: null,
  isAuthenticated: false,
};

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, isAuthenticated } = state;

  const login = (email, password) => {
    if (FAKE_USER.email === email && FAKE_USER.password === password) {
      dispatch({ type: 'login', payload: FAKE_USER });
    }
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  return <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('AuthContext was use outside AuthProvider');
  return context;
};

export { useAuth, AuthProvider };
