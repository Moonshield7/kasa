import styled from "styled-components"
import arrowLeft from "../../../utils/assets/leftArrow.png"
import arrowRight from "../../../utils/assets/rightArrow.png"
import colors from "../../../utils/style/colors"

const DisplayedPicture = styled.div`
	width: 100%;
	height: 415px;
	background-repeat: no-repeat;
	background-position: center;
	background-size:cover;
	border-radius:15px;
	margin-top:35px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const ArrowContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width:95%;
`
const PictureCounter = styled.p`
	position: relative;
	top: 130px;
	color: ${colors.white};
	font-size:18px;
	text-shadow: -1px 4px 5px rgba(0,0,0,0.76);
`
const Arrow = styled.img`
	&:hover{
		cursor: pointer;
	}
`


function Carousel ({pictures}) {

console.log(pictures)

const pic = pictures[0]

return (
	<DisplayedPicture style={{backgroundImage: `url(${pic})`}} >
		<ArrowContainer>
			<Arrow src={arrowLeft} alt="" />
			<Arrow src={arrowRight} alt="" />
		</ArrowContainer>
		<PictureCounter>1/4</PictureCounter>
	</DisplayedPicture>
)
}

export default Carousel