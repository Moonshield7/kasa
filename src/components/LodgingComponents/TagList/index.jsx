/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-body-style */
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Tag from '../Tag';

const TagContainer = styled.ul`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 430px) {
    width: 100%;
    position: absolute;
    top: 436px;
  }
`;

function TagList({ tags }) {
  return (
    <TagContainer>
      {tags.map((tag) => {
        return <Tag key={`${tag.id}`} tag={tag} />;
      })}
    </TagContainer>
  );
}

TagList.propTypes = {
  tags: PropTypes.object.isRequired,
};

export default TagList;
