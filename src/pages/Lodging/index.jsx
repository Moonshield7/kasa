import { useParams } from "react-router-dom"
import data from "../../data/data.json"
import styled from "styled-components";
import colors from "../../utils/style/colors";
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating";

const Container = styled.div`
	width: 90%;
	margin: auto;
	margin-bottom: 30px;
`
const TitleArea = styled.div`
	color: ${colors.primary};
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
`
const TitleText = styled.div`
	display:flex;
	flex-direction: column;
	height: 77px;
	justify-content: space-around;
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
const SubContainer = styled.div`
	width:100%;
	display:flex;
	justify-content: space-between;
	margin-top:15px;
`

const StarContainer = styled.div`
	display:flex;
	width:29%;
	justify-content:flex-end;
`

function Lodging () {
	const { idLodging } = useParams();
	const currentLodging = data.find((lodging) => lodging.id === idLodging);

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
			<SubContainer>
				<TagList>
					{currentLodging.tags.map((tag, index) => {
						return <Tag 
						key={`${tag}-${index}`}
							tag={tag} />
					})}
				</TagList>
				<StarContainer>
					<Rating 
						numberOfStars={currentLodging.rating}/>
				</StarContainer>
			</SubContainer>
			<SubContainer>
				<Collapse
					title="Description"
					content={currentLodging.description}/>
				<Collapse
					title="Equipements"
					content={currentLodging.equipments}/>
			</SubContainer>
			
		</Container>
	)
}

export default Lodging