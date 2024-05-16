import { useDispatch, useSelector } from 'react-redux';
import { deleteNews } from '../../actions/news';

const NewsSection = () => {
  const dispatch = useDispatch();
  console.log(useSelector((state: any) => state));
  const news = useSelector((state: any) => state.news).news;

  const handleClearNews = () => {
    dispatch(deleteNews());
  };

  return (
    <div>
      {news.length > 0 ? (
        news.map((item: any) => {
          return <div key={item.name}>{item.name}</div>;
        })
      ) : (
        <div>No news</div>
      )}
      {news.length > 0 && <button onClick={handleClearNews}>Clear News</button>}
    </div>
  );
};

export default NewsSection;
