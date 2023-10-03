import styled from "styled-components"
import colors from "../../utils/style/colors"
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import data from "../../data/data.json"
import { Link } from "react-router-dom"

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
					<Link to={`/lodging/${lodging.id}`} key={`${lodging}-${id}`}>
					<Card 
					key={`${lodging}-${id}`}
					cover={lodging.cover}
					title={lodging.title} />
					</Link>
				))}
			</CardContainer>
		</div>
	)
}

export default Home