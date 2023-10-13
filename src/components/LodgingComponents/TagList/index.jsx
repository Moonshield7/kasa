/* eslint-disable react/forbid-prop-types */
/* eslint-disable arrow-body-style */
import './style.css';
import { PropTypes } from 'prop-types';
import Tag from '../Tag';

function TagList({ tags }) {
  return (
    <ul className="tag-container">
      {tags.map((tag) => {
        return <Tag key={`${tag}`} tag={tag} />;
      })}
    </ul>
  );
}

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagList;
