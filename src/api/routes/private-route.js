import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth-context';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
