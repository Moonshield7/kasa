import { Link, useLocation } from 'react-router-dom';
import './style.css';
import logo from '../../utils/logolight.png';
import colors from '../../utils/style/colors';

function Header() {
  const location = useLocation();

  const styles = {
    home: {
      textDecoration: location.pathname === '/' ? 'underline' : 'none',
      color: colors.primary,
    },
    about: {
      textDecoration: location.pathname === '/about' ? 'underline' : 'none',
      color: colors.primary,
    },
  };

  return (
    <div className="nav">
      <img className="kasa-logo" src={logo} alt="Logo Kasa" />
      <div>
        <Link className="custom-link" to="/" style={styles.home}>
          Accueil
        </Link>
        <Link className="custom-link" to="/about" style={styles.about}>
          A propos
        </Link>
      </div>
    </div>
  );
}

export default Header;
