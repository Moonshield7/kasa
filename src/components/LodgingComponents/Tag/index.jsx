import colors from "../../../utils/style/colors"
import styled from "styled-components"

const TagLabel = styled.li`
	min-width: 115px;
	height: 25px;
	color: ${colors.white};
	font-size: 14px;
	background-color: ${colors.primary};
	border-radius:7px;
	display:flex;
	justify-content:center;
	align-items: center;
	margin-right: 15px;
	padding: 0 10px;
	@media screen and (max-width:390px){
		min-width:70px;
		height: 18px;
		font-size:10px;
		margin-top:5px;
	}
`

function Tag ({index, tag}) {
	return <TagLabel key={index}>{tag}</TagLabel>
}

export default Tag