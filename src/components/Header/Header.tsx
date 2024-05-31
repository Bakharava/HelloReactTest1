import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../../store/actions/asyncActions';
import { AppDispatch } from '../../rootReducer';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.div`
  background-color: #16181d;
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 100px;

  a {
    color: gray;
  }
  .active {
    color: white;
  }
`;

const Logo = styled.img`
  height: 32px;
  width: 40px;
`;
const Header = () => {
  const dispatch = useDispatch() as AppDispatch;
  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <HeaderWrapper>
      <div style={{ margin: '0 auto', width: '80%' }}>
        <Logo alt="Hottest New logo" src={logo} />
        <div style={{ color: '#7FA8AC', fontFamily: '"Times New Roman", Times, serif', fontWeight: 700 }}>
          Daily Hot News
        </div>
      </div>
      <NavLink style={{ marginRight: 16 }} to="/">
        Home
      </NavLink>
      <NavLink style={{ marginRight: 16 }} to="/news">
        News
      </NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </HeaderWrapper>
  );
};

export default Header;
