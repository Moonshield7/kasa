import styled from "styled-components"
import colors from "../../../utils/style/colors";

const TitleContainer = styled.div`
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

function TitleArea({title, location, hostName, hostPicture}) {
return (
	<TitleContainer>
		<TitleText>
			<h1>{title}</h1>
			<p>{location}</p>
		</TitleText>
		<HostInfo>
			<HostName>{hostName}</HostName>
			<HostPicture src={hostPicture} alt="" />
		</HostInfo>
	</TitleContainer>
)
}

export default TitleArea