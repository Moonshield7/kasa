import { useEffect, useState } from 'react';
import './style.css';
import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner';

function About() {
  const [aboutData, setAboutData] = useState();
  useEffect(() => {
    async function fetchAboutData() {
      const response = await fetch('/data/about.json');
      const data = await response.json();
      setAboutData(data);
    }

    fetchAboutData();
  }, []);

  if (aboutData !== undefined) {
    return (
      <div className="about-container">
        <Banner />
        <div className="about-collapses">
          {aboutData.map((section) => (
            <Collapse key={`${section.id}`} title={section.title} content={section.content} />
          ))}
        </div>
      </div>
    );
  }
}

export default About;
