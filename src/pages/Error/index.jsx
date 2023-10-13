/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './style.css';
import colors from '../../utils/style/colors';

function Error() {
  return (
    <div className="error-container" style={{ color: colors.primary }}>
      <h1 className="error-title">404</h1>
      <p className="error-subtitle">Oups ! La page que vous demandez n'existe pas.</p>
      <Link className="error-link" style={{ color: colors.primary }} to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
