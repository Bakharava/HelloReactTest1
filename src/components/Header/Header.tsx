import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNews } from '../../actions/news';

const HeaderWrapper = styled.div`
  background-color: #16181d;
  display: flex;
  align-items: center;
  height: 72px;
  width: 100%;
`;

const Logo = styled.img`
  height: 32px;
  width: 40px;
`;
const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNews();
  }, []);
  const getNews = async () => {
    const newsUrl = `https://newsapi.org/v2/top-headlines/sources?pageSize=${10}&apiKey=${process.env.REACT_APP_API_KEY}`;

    const response = await fetch(newsUrl);
    const data = await response.json();
    data.sources.length = 10;

    dispatch(setNews(data.sources));
  };

  return (
    <HeaderWrapper>
      <div style={{ margin: '0 auto', width: '80%' }}>
        <Logo alt="Hottest New logo" src={logo} />
        <div style={{ color: '#7FA8AC', fontFamily: '"Times New Roman", Times, serif', fontWeight: 700 }}>
          Daily Hot News
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
