import styled from "styled-components"
import colors from "../../utils/style/colors"
import picture from "../../utils/assets/homeimg.png"

const Container = styled.li`
	list-style: none;
	width:340px;
	height: 340px;
	margin-bottom: 75px;
	background-color: ${colors.primary};
	border-radius: 15px;
	overflow: clip;
`
const CardTitle = styled.h2`
	color: ${colors.white};
	font-size: 18px;
	width: 300px;
	height: 52px;
	position: relative;
	top: 260px;
	left: 20px;
	z-index: 2;
`
const CardImg = styled.img`
	position: relative;
	top:-52px;
	width:340px;
	height: 340px;
	z-index: 0;
`

function Card() {
	return (
		<Container>
			<CardTitle>Titre de la location sur deux lignes et la location sur</CardTitle>
			<CardImg src={picture} alt="" />
		</Container>
	)
}

export default Card