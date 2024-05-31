import { Link, useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>Page not found</div>
      {/*//Bad practices*/}
      <button onClick={handleGoHome}>Go Home</button>
      <button onClick={handleGoBack}>Go Back</button>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFoundPage;
