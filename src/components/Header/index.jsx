import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../utils/logolight.png"
import colors from "../../utils/style/colors"
import { useState } from "react"

const StyledLink = styled(Link)`
	color: ${colors.primary};
	font-size: 24px;
	padding: 15px;
	text-decoration: none;
`
const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: auto;
	margin-top:30px;
	width: 90%;
	height: 68px;
`


function Header () {
	const [currentPage, setCurrentPage] = useState();
	function toHome(){
		setCurrentPage("Home")
	}
	function toAbout(){
		setCurrentPage("About")
	}

	const styles = {
		home:{
			textDecoration: currentPage === "Home" ? "underline" : "none"
		},
		about:{
			textDecoration: currentPage === "About" ? "underline" : "none"
		}
	}
	return (
		<StyledNav>
			<img src={logo} alt="Logo Kasa" />
			<div>
			<StyledLink to="/" onClick={toHome} style={styles.home}>Accueil</StyledLink>
			<StyledLink to="/about" onClick={toAbout} style={styles.about}>About</StyledLink>
			</div>
		</StyledNav>
	)
}

export default Header