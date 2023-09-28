import styled from "styled-components"
import logo from "../../utils/logodark.png"
import montserrat from "../../utils/style/font"
import colors from "../../utils/style/colors"

const StyledFooter = styled.footer`
	background-color: ${colors.black};
	height: 210px;
	width: 100%;
	display:flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
	color: ${colors.white};
	font-family: ${montserrat};
	font-size:24px;
`

const StyledLogo = styled.img`
	height:40px;
	width: 122px;
	margin-bottom: 25px;
`

function Footer () {
	return (
		<StyledFooter>
			<StyledLogo src={logo} alt="Logo Kasa"/>
			<span>© 2020 Kasa. All rights reserved</span>
		</StyledFooter>
	)
}

export default Footer