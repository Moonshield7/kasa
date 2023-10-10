import Rating from "../Rating"
import styled from "styled-components"

const Container = styled.div`
	display:flex;
	width:29%;
	justify-content:flex-end;
	@media screen and (max-width:430px){
		position: absolute;
		top: 480px;
		left: 0px;
	}
`

function StarContainer ({rating}) {
	return (
		<Container>
			<Rating numberOfStars={rating}/>
		</Container>
	)
}

export default StarContainer