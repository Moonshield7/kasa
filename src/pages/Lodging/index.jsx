import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css';
import TitleArea from '../../components/LodgingComponents/TitleArea';
import CollapseContainer from '../../components/LodgingComponents/CollapseContainer';
import StarContainer from '../../components/LodgingComponents/StarContainer';
import TagList from '../../components/LodgingComponents/TagList';

import Carousel from '../../components/LodgingComponents/Carousel';

function Lodging() {
  const [lodgings, setLodgings] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data/data.json');
      const data = await response.json();
      setLodgings(data);
    }

    fetchData();
  }, []);

  const { idLodging } = useParams();

  if (lodgings !== undefined) {
    const currentLodging = lodgings.find((lodging) => lodging.id === idLodging);

    return (
      <div className="lodging-container">
        <Carousel pictures={currentLodging.pictures} />
        <TitleArea
          title={currentLodging.title}
          location={currentLodging.location}
          hostName={currentLodging.host.name}
          hostPicture={currentLodging.host.picture}
        />
        <div className="lodging-subcontainer">
          <TagList tags={currentLodging.tags} />
          <StarContainer rating={currentLodging.rating} />
        </div>
        <CollapseContainer
          description={currentLodging.description}
          equipments={currentLodging.equipments}
        />
      </div>
    );
  }
}

export default Lodging;
