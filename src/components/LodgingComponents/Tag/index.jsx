import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import colors from '../../../utils/style/colors';

const TagLabel = styled.li`
  min-width: 115px;
  height: 25px;
  color: ${colors.white};
  font-size: 14px;
  background-color: ${colors.primary};
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  padding: 0 10px;
  @media screen and (max-width: 430px) {
    min-width: 70px;
    height: 18px;
    font-size: 10px;
    margin-top: 5px;
  }
`;

function Tag({ tag }) {
  return <TagLabel key={tag.id}>{tag}</TagLabel>;
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
