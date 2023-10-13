import './style.css';
import { PropTypes } from 'prop-types';
import Rating from '../Rating';

function StarContainer({ rating }) {
  return (
    <div className="star-container">
      <Rating numberOfStars={rating} />
    </div>
  );
}

StarContainer.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default StarContainer;
