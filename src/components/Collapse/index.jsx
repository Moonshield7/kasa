/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useCallback, useState } from 'react';
import arrowUp from '../../utils/assets/arrow_back_ios-24px 2.png';
import arrowDown from '../../utils/assets/arrow_back_ios-24px 1.png';
import colors from '../../utils/style/colors';
import './style.css';

function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggle = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, []);

  return (
    <div className={title === 'Equipements' || title === 'Description' ? 'small' : 'wide'}>
      <header className="collapse-header" style={{ backgroundColor: colors.primary }}>
        <p>{title}</p>
        <img
          className="arrow"
          src={isCollapsed ? arrowDown : arrowUp}
          alt="arrow"
          onClick={toggle}
        />
      </header>
      {isCollapsed ? (
        <div style={{ backgroundColor: colors.gray }}>
          <div className="dropdown-content" style={{ color: colors.primary }}>
            {title === 'Equipements'
              ? content.map((elem) => <p key={`${elem}`}>{elem}</p>)
              : content}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Collapse;
