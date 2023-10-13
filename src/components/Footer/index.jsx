import styled from 'styled-components';
import logo from '../../utils/logodark.png';
import colors from '../../utils/style/colors';

const StyledFooter = styled.footer`
  background-color: ${colors.black};
  height: 210px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  font-size: 24px;
`;
const FooterText = styled.p`
  @media screen and (max-width: 430px) {
    font-size: 12px;
    width: 120px;
    text-align: center;
  }
`;

const StyledLogo = styled.img`
  height: 40px;
  width: 122px;
  margin-bottom: 25px;
  @media screen and (max-width: 430px) {
    margin-bottom: 10px;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledLogo src={logo} alt="Logo Kasa" />
      <FooterText>© 2020 Kasa. All rights reserved</FooterText>
    </StyledFooter>
  );
}

export default Footer;
