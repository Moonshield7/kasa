import Card from "../../components/Card"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"
import colors from "../../utils/style/colors"

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
const StyledLink = styled(Link)`
	text-decoration: none;
`

function CardList() {
	const [lodgings, setLodgings] = useState()
	useEffect(() => {
		async function fetchData(){
			const response = await fetch('/data/data.json')
			const data = await response.json()
			setLodgings(data)
		}
		
		fetchData()
	}, [])

	if(lodgings === undefined){
		return (<CardContainer>
		</CardContainer>)
	}

	return (
		<CardContainer>
			{lodgings.map((lodging, index) => (
				<StyledLink to={`/lodging/${lodging.id}`} key={`${lodging}-${index}`}>
				<Card 
					key={`${lodging}-${index}`}
					cover={lodging.cover}
					title={lodging.title} />
				</StyledLink>
			))}
		</CardContainer>
	)
}

export default CardList