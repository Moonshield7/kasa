import styled from "styled-components"
import colors from "../../utils/style/colors"
import picture1 from "../../utils/assets/homeimg.png"
import picture2 from "../../utils/assets/aboutimg.png"

const Background = styled.header`
	width: 90%;
	height: 223px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-clip: border-box;
	border-radius: 15px;
	margin: auto;
	margin-top: 50px;
	@media screen and (max-width:430px){
		height: 111px;
		margin-top: 25px;
		margin-bottom: 25px;
	}
`

const Title = styled.h1`
	width:100%;
	height:100%;
	background-color: rgba(0, 0, 0, .35);
	border-radius: 15px;
	color: ${colors.white};
	font-size: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width:430px){
		font-size: 24px;
		padding: 25px;
		justify-content: left;

	}
`
const LignReturn = styled.br`
	@media screen and (min-width:430px){
		display: none;

	}
`

function Banner(){
	const activePage = window.location.href;
	const styles = {
		image:{
			backgroundImage: activePage === "http://localhost:3000/about" ? `url(${picture2})` : `url(${picture1})`
			
		}
	}
	return (
	<Background style={styles.image}>
		<Title>
			{activePage === "http://localhost:3000/about" ? "" : <span>Chez vous, <LignReturn />partout et ailleurs</span>}
		</Title>
	</Background>
	)
}

export default Banner