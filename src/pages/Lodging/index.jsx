import { useParams } from "react-router-dom"
import data from "../../data/data.json"
import styled from "styled-components";
import colors from "../../utils/style/colors";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";

const Container = styled.div`
	width: 90%;
	margin: auto;
`
const TitleArea = styled.div`
	color: ${colors.primary};
	display: flex;
	justify-content: space-between;
`
const TitleText = styled.div`

`
const HostInfo = styled.div`
	display:flex;
	align-items:center;
`
const HostName = styled.p`
	width:93px;
	height: 52px;
	font-size:18px;
	text-align: right;
	margin-right: 15px;
`
const HostPicture = styled.img`
	width: 64px;
	heigh: 64px;
	border-radius: 50px;
`
const TagList = styled.ul`
	width: 70%;
	display:flex;
`
const MiscContainer = styled.div`
	width:100%;
	display:flex;
	justify-content: space-between;
`

const StarContainer = styled.div`
	display:flex;
	width:29%;
	justify-content:flex-end;
`

function Lodging () {
	const { idLodging } = useParams();
	const currentLodging = data.find((lodging) => lodging.id === idLodging);
	console.log(currentLodging)

	return (
		<Container>
			{/* Carousel à coder */}
			<img src={currentLodging.cover} alt="" />
			<TitleArea>
				<TitleText>
					<h1>{currentLodging.title}</h1>
					<p>{currentLodging.location}</p>
				</TitleText>
				<HostInfo>
					<HostName>{currentLodging.host.name}</HostName>
					<HostPicture src={currentLodging.host.picture} alt="" />
				</HostInfo>
			</TitleArea>
			<MiscContainer>
				<TagList>
					{currentLodging.tags.map((tag, index) => {
						return <Tag 
							key={index}
							tag={tag} />
					})}
				</TagList>
				<StarContainer>
					etoiles
				</StarContainer>
			</MiscContainer>
			<div>
				<Collapse
					title="Description"
					content={currentLodging.description}/>
				<Collapse
					title="Equipements"
					content={currentLodging.equipments}/>
			</div>
			
		</Container>
	)
}

export default Lodging