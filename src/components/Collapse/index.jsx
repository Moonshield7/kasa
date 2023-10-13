import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { useCallback, useState } from 'react';
import arrowUp from '../../utils/assets/arrow_back_ios-24px 2.png';
import arrowDown from '../../utils/assets/arrow_back_ios-24px 1.png';
import colors from '../../utils/style/colors';
import './style.css';

const Container = styled.div`
  margin-bottom: 25px;
`;
const ContainerHeader = styled.div`
  background-color: ${colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-radius: 10px;
  color: ${colors.white};
  font-size: 24px;
  @media screen and (max-width: 430px) {
    height: 30px;
    font-size: 13px;
    padding: 0 10px;
  }
`;
const Arrow = styled.img`
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 430px) {
    height: 16px;
    font-size: 13px;
    padding-left: 10px;
  }
`;

const Dropdown = styled.ul`
  background-color: ${colors.gray};
`;
const DropdownContent = styled.li`
  list-style: none;
  padding: 25px 15px;
  color: ${colors.primary};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 430px) {
    font-size: 12px;
  }
`;

function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggle = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  });

  return (
    <Container className={title === 'Equipements' || title === 'Description' ? 'small' : 'wide'}>
      <ContainerHeader>
        <p>{title}</p>
        <Arrow src={isCollapsed ? arrowDown : arrowUp} alt="arrow" onClick={toggle} />
      </ContainerHeader>
      {isCollapsed ? (
        <Dropdown>
          <DropdownContent>
            {title === 'Equipements' ? content.map((elem) => <p key={elem.id}>{elem}</p>) : content}
          </DropdownContent>
        </Dropdown>
      ) : (
        ''
      )}
    </Container>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;
