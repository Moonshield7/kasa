import styled from "styled-components"
import colors from "../../utils/style/colors"
import Banner from "../../components/Banner"
import Card from "../../components/Card"

//Placeholder content before making the actual components
const CardContainer = styled.ul`
	width: 90%;
	min-height: 829px;
	background-color: ${colors.gray};
	border-radius: 15px;
	margin: 50px auto;
	padding: 80px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
`

const CardTest = styled.li`
	list-style: none;
	width:340px;
	height: 340px;
	align-self: center;
	margin-bottom: 75px;
	background-color: ${colors.primary};
	border-radius: 15px;
	overflow: clip;
`

function Home () {
	return (
		<div>
			<Banner />
			<CardContainer>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
				<Card></Card>
			</CardContainer>
		</div>
	)
}

export default Home