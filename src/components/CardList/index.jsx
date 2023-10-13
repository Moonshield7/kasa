import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css';
import Card from '../Card';
import colors from '../../utils/style/colors';

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
      <ul className="card-list" style={{ backgroundColor: colors.gray }}>
        {lodgings.map((lodging) => (
          <Link
            style={{ textDecoration: 'none' }}
            to={`/lodging/${lodging.id}`}
            key={`${lodging.id}`}
          >
            <Card key={`${lodging.id}`} cover={lodging.cover} title={lodging.title} />
          </Link>
        ))}
      </ul>
    );
  }
}

export default CardList;
