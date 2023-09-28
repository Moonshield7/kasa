import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../utils/logolight.png"
import montserrat from "../../utils/style/font"
import colors from "../../utils/style/colors"

const StyledLink = styled(Link)`
	color: ${colors.primary};
	font-size: 24px;
	padding: 15px;
	text-decoration: none;
	font-family :  ${montserrat}
`
const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	width: 90%;
	height: 68px;
`


function Header () {
	return (
		<StyledNav>
			<img src={logo} alt="Logo Kasa" />
			<div>
			<StyledLink to="/">Accueil</StyledLink>
			<StyledLink to="/about">About</StyledLink>
			</div>
		</StyledNav>
	)
}

export default Header