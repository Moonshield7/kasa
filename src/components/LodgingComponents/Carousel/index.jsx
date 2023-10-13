/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import arrowLeft from '../../../utils/assets/leftArrow.png';
import arrowRight from '../../../utils/assets/rightArrow.png';
import colors from '../../../utils/style/colors';

const DisplayedPicture = styled.div`
  width: 100%;
  height: 415px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 430px) {
    height: 255px;
  }
`;
const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;
const PictureCounter = styled.p`
  position: relative;
  top: 130px;
  color: ${colors.white};
  font-size: 18px;
  text-shadow: -1px 4px 5px rgba(0, 0, 0, 0.76);
  @media screen and (max-width: 430px) {
    top: 90px;
  }
`;
const Arrow = styled.img`
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 430px) {
    height: 24px;
  }
`;

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
    <DisplayedPicture style={{ backgroundImage: `url(${pic})` }}>
      <ArrowContainer>
        <Arrow src={arrowLeft} alt="" onClick={previousPicture} />
        <Arrow src={arrowRight} alt="" onClick={nextPicture} />
      </ArrowContainer>
      <PictureCounter>
        {currentPictureIndex + 1} / {numberOfPictures()}
      </PictureCounter>
    </DisplayedPicture>
  );
}

Carousel.propTypes = {
  pictures: PropTypes.object.isRequired,
};
export default Carousel;
