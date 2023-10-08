import styled from "styled-components"
import colors from "../../utils/style/colors"
import PropTypes from "prop-types"

const Container = styled.li`
	list-style: none;
	width:340px;
	height: 340px;
	margin-bottom: 75px;
	border-radius: 15px;
	overflow: clip;
	@media screen and (max-width:390px){
		margin-bottom: 25px;
	}
`
const CardTitle = styled.h2`
	color: ${colors.white};
	display: flex;
	align-items: flex-end;
	font-size: 18px;
	width: 300px;
	height: 52px;
	position: relative;
	top: 260px;
	left: 20px;
	z-index: 2;
	text-shadow: -5px 0px 7px rgba(0,0,0,0.72);
`
const CardImg = styled.img`
	position: relative;
	top:-52px;
	min-width:340px;
	height: 340px;
	z-index: 0;
`

function Card({cover, title}) {
	return (
		<Container>
			<CardTitle>{title}</CardTitle>
			<CardImg src={cover} alt="" />
		</Container>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired
}

export default Card