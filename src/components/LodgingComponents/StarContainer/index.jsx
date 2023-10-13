import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Rating from '../Rating';

const Container = styled.div`
  display: flex;
  width: 29%;
  justify-content: flex-end;
  @media screen and (max-width: 430px) {
    position: absolute;
    top: 480px;
    left: 0px;
  }
`;

function StarContainer({ rating }) {
  return (
    <Container>
      <Rating numberOfStars={rating} />
    </Container>
  );
}

StarContainer.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default StarContainer;
