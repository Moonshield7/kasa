/* eslint-disable react/jsx-one-expression-per-line */
import picture1 from '../../utils/assets/homeimg.png';
import picture2 from '../../utils/assets/aboutimg.png';
import './style.css';

function Banner() {
  const activePage = window.location.href;
  const styles = {
    image: {
      backgroundImage:
        activePage === 'http://localhost:3000/about' ? `url(${picture2})` : `url(${picture1})`,
    },
  };
  return (
    <header className="banner-background" style={styles.image}>
      <h1 className="banner-title">
        {' '}
        {activePage === 'http://localhost:3000/about' ? (
          ''
        ) : (
          <span>
            Chez vous, <br className="banner-br" />
            partout et ailleurs
          </span>
        )}
      </h1>
    </header>
  );
}

export default Banner;
