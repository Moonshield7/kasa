/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import { useCallback, useState } from 'react';
import { PropTypes } from 'prop-types';
import './style.css';
import arrowLeft from '../../../utils/assets/leftArrow.png';
import arrowRight from '../../../utils/assets/rightArrow.png';

function Carousel({ pictures }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const numberOfPictures = useCallback(() => {
    let total = 0;
    pictures.forEach(() => {
      total += 1;
    });
    return total;
  });

  const nextPicture = useCallback(() => {
    if (currentPictureIndex >= numberOfPictures() - 1) {
      setCurrentPictureIndex(0);
    } else {
      setCurrentPictureIndex(currentPictureIndex + 1);
    }
  });

  const previousPicture = useCallback(() => {
    if (currentPictureIndex === 0) {
      setCurrentPictureIndex(numberOfPictures() - 1);
    } else {
      setCurrentPictureIndex(currentPictureIndex - 1);
    }
  });

  const pic = pictures[currentPictureIndex];

  return (
    <div className="carousel-picture" style={{ backgroundImage: `url(${pic})` }}>
      <div className="carousel-arrow-container">
        <img className="carousel-arrow" src={arrowLeft} alt="" onClick={previousPicture} />
        <img className="carousel-arrow" src={arrowRight} alt="" onClick={nextPicture} />
      </div>
      <p className="carousel-picture-counter">
        {currentPictureIndex + 1} / {numberOfPictures()}
      </p>
    </div>
  );
}

Carousel.propTypes = {
  pictures: PropTypes.object.isRequired,
};
export default Carousel;
