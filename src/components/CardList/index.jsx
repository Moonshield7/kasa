import Card from '../../components/Card';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardContainer = styled.ul`
  width: 90%;
  min-height: 829px;
  background-color: ${colors.gray};
  border-radius: 15px;
  margin: 50px auto;
  padding: 80px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 430px) {
    margin-top: 25px;
    padding: 0;
    background: none;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function CardList() {
  const [lodgings, setLodgings] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data/data.json');
      const data = await response.json();
      setLodgings(data);
    }

    fetchData();
  }, []);

  if (lodgings !== undefined) {
    return (
      <CardContainer>
        {lodgings.map((lodging) => (
          <StyledLink to={`/lodging/${lodging.id}`} key={`${lodging.id}`}>
            <Card key={`${lodging.id}`} cover={lodging.cover} title={lodging.title} />
          </StyledLink>
        ))}
      </CardContainer>
    );
  }
}

export default CardList;
