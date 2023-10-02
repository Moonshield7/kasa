import styled from "styled-components"
import colors from "../../utils/style/colors"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import data from "../../data/data.json"

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

function Home () {
	return (
		<div>
			<Banner />
			<CardContainer>
				{data.map((lodging, id) => (
					<Card 
					key={id}
					cover={lodging.cover}
					title={lodging.title} />
				))}
			</CardContainer>
		</div>
	)
}

export default Home