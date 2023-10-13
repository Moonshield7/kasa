import './style.css';
import logo from '../../utils/logodark.png';

function Footer() {
  return (
    <footer>
      <img className="footer-logo" src={logo} alt="Logo Kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
