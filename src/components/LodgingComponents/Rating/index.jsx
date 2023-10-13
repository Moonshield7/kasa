import './style.css';
import { PropTypes } from 'prop-types';
import activeStar from '../../../utils/assets/star-active 3.png';
import inactiveStar from '../../../utils/assets/star-inactive 1.png';

function Rating({ numberOfStars }) {
  const rating = parseInt(numberOfStars, 10);

  switch (rating) {
    case 1:
      return (
        <div>
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
        </div>
      );
    case 2:
      return (
        <div>
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
        </div>
      );
    case 3:
      return (
        <div>
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
        </div>
      );
    case 4:
      return (
        <div>
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
        </div>
      );
    case 5:
      return (
        <div>
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={activeStar} alt="Etoile pleine" />
          <img className="star" src={activeStar} alt="Etoile pleine" />
        </div>
      );
    default:
      return (
        <div>
          <img className="star" src={inactiveStar} alt="Etoile vide" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
          <img className="star" src={inactiveStar} alt="Etoile vide" />
        </div>
      );
  }
}

Rating.propTypes = {
  numberOfStars: PropTypes.string.isRequired,
};

export default Rating;
