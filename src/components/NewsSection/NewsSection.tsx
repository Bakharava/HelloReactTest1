import { useDispatch, useSelector } from 'react-redux';
import { deleteNews } from '../../actions/news';
import styled from 'styled-components';

const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const NewsSection = () => {
  const dispatch = useDispatch();
  console.log(useSelector((state: any) => state));
  const news = useSelector((state: any) => state.news).news;
  const isNewsLoading = useSelector((state: any) => state.news).isNewsLoading;
  const error = useSelector((state: any) => state.news).error;

  const handleClearNews = () => {
    dispatch(deleteNews());
  };

  return (
    <div>
      {isNewsLoading && <Loader />}
      {news.length > 0 ? (
        news.map((item: any) => {
          return <div key={item.name}>{item.name}</div>;
        })
      ) : (
        <div></div>
      )}
      {news.length > 0 && <button onClick={handleClearNews}>Clear News</button>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default NewsSection;
