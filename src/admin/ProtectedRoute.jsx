import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';
  
  useEffect(() => {
    // Check login status on mount and when component updates
    if (!isLoggedIn) {
      console.log('User not authenticated, redirecting to login');
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRoute;