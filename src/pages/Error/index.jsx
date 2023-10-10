import { Link } from "react-router-dom"
import styled from "styled-components"
import colors from "../../utils/style/colors"

const PageContainer = styled.div`
	color: ${colors.primary};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	min-height:66.9vh;
	@media screen and (max-width:430px){
		min-height: 65.6vh;
	}
`
const Title = styled.h1`
	font-size: 288px;
	@media screen and (max-width:430px){
		font-size: 96px;
	}
`
const Subtitle = styled.p`
	font-size: 36px;
	text-align: center;
	@media screen and (max-width:430px){
		font-size: 18px;
	}
`
const ReturnLink = styled(Link)`
	font-size: 18px;
	color: ${colors.primary};
	@media screen and (max-width:430px){
		font-size: 14px;
	}
`

function Error () {
	return (
	<PageContainer>
		<Title>404</Title>
		<Subtitle>Oups ! La page que vous demandez n'existe pas.</Subtitle>
		<ReturnLink to="/">Retourner sur la page d'accueil</ReturnLink>
	</PageContainer>
	)
}

export default Error