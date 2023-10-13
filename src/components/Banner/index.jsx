import styled from 'styled-components';
import colors from '../../utils/style/colors';
import picture1 from '../../utils/assets/homeimg.png';

const text = 'Chez vous, partout et ailleurs';
const Background = styled.header`
  width: 90%;
  height: 223px;
  background: url(${picture1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-clip: border-box;
  border-radius: 15px;
  margin: auto;
  margin-top: 50px;
`;

const Title = styled.h1`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 15px;
  color: ${colors.white};
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Banner() {
  return (
    <Background>
      <Title>{text}</Title>
    </Background>
  );
}

export default Banner;
