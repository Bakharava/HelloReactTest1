import { NewsSection } from '../NewsSection';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const NewsPage = () => {
  const { language } = useContext(AppContext);

  return (
    <>
      <h2>News for: {language} language</h2>
      <NewsSection />
    </>
  );
};

export default NewsPage;
