import styled from "styled-components"
import colors from "../../../utils/style/colors";

const TitleContainer = styled.div`
	color: ${colors.primary};
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
	@media screen and (max-width:390px){
		flex-direction: column;
		justify-content: start;
		margin-top: 10px;
	}
`
const TitleText = styled.div`
	display:flex;
	flex-direction: column;
	height: 77px;
	justify-content: space-around;
	@media screen and (max-width:390px){
		justify-content: start;
	}

`
const MainTitle = styled.h1`
	font-size:32px;
	@media screen and (max-width:390px){
		font-size: 18px;
		margin-bottom: 10px;
	}
`
const Subtitle = styled.p`
	font-size:18px;
	@media screen and (max-width:390px){
		font-size: 14px;
	}
`
const HostInfo = styled.div`
	display:flex;
	align-items:center;
	@media screen and (max-width:390px){
		height: 40px;
		justify-content: flex-end;
		position: relative;
		top: 10px;
	}
`
const HostName = styled.p`
	width:93px;
	height: 52px;
	font-size:18px;
	text-align: right;
	margin-right: 15px;
	@media screen and (max-width:390px){
		font-size: 12px;
		height:33px;
		width:80px;
	}
`
const HostPicture = styled.img`
	width: 64px;
	heigh: 64px;
	border-radius: 50px;
	@media screen and (max-width:390px){
		height:32px;
		width:32px;
	}
`

function TitleArea({title, location, hostName, hostPicture}) {
return (
	<TitleContainer>
		<TitleText>
			<MainTitle>{title}</MainTitle>
			<Subtitle>{location}</Subtitle>
		</TitleText>
		<HostInfo>
			<HostName>{hostName}</HostName>
			<HostPicture src={hostPicture} alt="" />
		</HostInfo>
	</TitleContainer>
)
}

export default TitleArea