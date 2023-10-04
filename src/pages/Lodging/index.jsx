import { useParams } from "react-router-dom"
// import data from "../../data/data.json"
import styled from "styled-components";
import TitleArea from "../../components/LodgingComponents/TitleArea";
import CollapseContainer from "../../components/LodgingComponents/CollapseContainer";
import StarContainer from "../../components/LodgingComponents/StarContainer";
import TagList from "../../components/LodgingComponents/TagList";
import { useEffect, useState } from "react";

const Container = styled.div`
	width: 90%;
	margin: auto;
	margin-bottom: 30px;
`
const SubContainer = styled.div`
	width:100%;
	display:flex;
	justify-content: space-between;
	margin-top:15px;
`

function Lodging () {
	const [lodgings, setLodgings] = useState()
	useEffect(() => {
		async function fetchData(){
			const response = await fetch('/data/data.json')
			const data = await response.json()
			setLodgings(data)
		}
		
		fetchData()
		
	}, [])

	const { idLodging } = useParams();
	
	if(lodgings !== undefined){
		const currentLodging = lodgings.find((lodging) => lodging.id === idLodging);

		return (
			<Container>
				{/* Carousel à coder */}
				<img src={currentLodging.cover} alt="" />
				<TitleArea
					title={currentLodging.title}
					location={currentLodging.location}
					hostName={currentLodging.host.name}
					hostPicture={currentLodging.host.picture}
				/>
				<SubContainer>
					<TagList tags={currentLodging.tags} />
					<StarContainer rating={currentLodging.rating}/>
				</SubContainer>
				<CollapseContainer 
					description={currentLodging.description}
					equipments={currentLodging.equipments} />
			</Container>
		)
	}

}

export default Lodging