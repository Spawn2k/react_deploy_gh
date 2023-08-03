import React, { useEffect } from 'react';
import { useAuth } from '../contexts/FakeAuthContext';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = (props) => {
  const { children } = props;
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/word-wise');
    }

    return () => {};
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
};

export default ProtectedRoutes;
