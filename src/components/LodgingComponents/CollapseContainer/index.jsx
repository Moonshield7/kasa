import { PropTypes } from 'prop-types';
import './style.css';
import Collapse from '../../Collapse';

function CollapseContainer({ description, equipments }) {
  return (
    <div className="subcontainer">
      <Collapse title="Description" content={description} />
      <Collapse title="Equipements" content={equipments} />
    </div>
  );
}

CollapseContainer.propTypes = {
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  equipments: PropTypes.array.isRequired,
};
export default CollapseContainer;
