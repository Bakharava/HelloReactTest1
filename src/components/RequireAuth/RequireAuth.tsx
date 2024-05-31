import { Navigate } from 'react-router';

const RequireAuth = ({ children }: { children: any }) => {
  const auth = localStorage.getItem('userName');

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default RequireAuth;
