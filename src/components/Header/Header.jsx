import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

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
