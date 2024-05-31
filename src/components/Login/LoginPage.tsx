import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (e: any) => {
    const user = e.target.value;
    localStorage.setItem('userName', user);

    const fromPage = location.state?.from?.pathname ?? '/';

    navigate(fromPage);
  };

  return (
    <div>
      <h1>Login page</h1>

      <input onChange={handleLogIn} type="text" />
    </div>
  );
};

export default LoginPage;
