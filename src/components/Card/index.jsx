import PropTypes from 'prop-types';
import './style.css';

function Card({ cover, title }) {
  return (
    <li className="card-container">
      <h2 className="card-title">{title}</h2>
      <img className="card-image" src={cover} alt="" />
    </li>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
