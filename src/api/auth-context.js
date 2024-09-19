import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchSignOut } from './routes/authorization';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined); // Изначально undefined

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await fetch('/verify', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to verify authentication');
        }

        setIsAuthenticated(true);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    verifyAuth();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = async () => {
    setIsAuthenticated(false);
    try {
      await fetchSignOut();
    } catch (err) {
      console.error('Failed to logout:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
