import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
import { refreshToken } from './authorization'; // Импортируем функцию обновления токена

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated === undefined) {
        const tokenRefreshed = await refreshToken();
        if (tokenRefreshed) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [isAuthenticated, setIsAuthenticated]);

  if (loading) {
    return <div>Loading...</div>; // Индикатор загрузки
  }

  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
