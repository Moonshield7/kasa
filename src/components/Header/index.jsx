import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../utils/logolight.png';
import colors from '../../utils/style/colors';

const StyledLink = styled(Link)`
  color: ${colors.primary};
  font-size: 24px;
  padding: 15px;
  text-decoration: none;
  @media screen and (max-width: 430px) {
    font-size: 12px;
  }
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 30px;
  width: 90%;
  height: 68px;

  @media screen and (max-width: 430px) {
    height: 50px;
    text-transform: uppercase;
  }
`;
const KasaLogo = styled.img`
  @media screen and (max-width: 430px) {
    height: 46px;
  }
`;

function Header() {
  const location = useLocation();

  const styles = {
    home: {
      textDecoration: location.pathname === '/' ? 'underline' : 'none',
    },
    about: {
      textDecoration: location.pathname === '/about' ? 'underline' : 'none',
    },
  };

  return (
    <StyledNav>
      <KasaLogo src={logo} alt="Logo Kasa" />
      <div>
        <StyledLink to="/" style={styles.home}>
          Accueil
        </StyledLink>
        <StyledLink to="/about" style={styles.about}>
          A propos
        </StyledLink>
      </div>
    </StyledNav>
  );
}

export default Header;
