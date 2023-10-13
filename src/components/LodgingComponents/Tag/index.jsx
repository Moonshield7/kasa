import './style.css';
import { PropTypes } from 'prop-types';
import colors from '../../../utils/style/colors';

function Tag({ tag }) {
  return (
    <li className="tag-label" style={{ backgroundColor: colors.primary }} key={tag}>
      {tag}
    </li>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
