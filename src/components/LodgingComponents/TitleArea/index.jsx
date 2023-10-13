/* eslint-disable object-curly-newline */
import './style.css';
import { PropTypes } from 'prop-types';
import colors from '../../../utils/style/colors';

function TitleArea({ title, location, hostName, hostPicture }) {
  const name = hostName.split(' ');

  return (
    <div className="title-container" style={{ color: colors.primary }}>
      <div className="title-text">
        <h1 className="title-name">{title}</h1>
        <p className="title-location">{location}</p>
      </div>
      <div className="host-container">
        <p className="host-name">
          {name[0]}
          <br />
          {name[1]}
        </p>
        <img className="host-picture" src={hostPicture} alt="" />
      </div>
    </div>
  );
}

TitleArea.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string.isRequired,
};
export default TitleArea;
