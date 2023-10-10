import Collapse from "../../Collapse"
import styled from "styled-components"

const SubContainer = styled.div`
	width:100%;
	display:flex;
	justify-content: space-between;
	margin-top:15px;
	@media screen and (max-width:430px){
		flex-direction: column;
		align-items: center;
	}
`

function CollapseContainer({description, equipments}) {
	return (
		<SubContainer>
			<Collapse
				title="Description"
				content={description}/>
			<Collapse
				title="Equipements"
				content={equipments}/>
		</SubContainer>
	)
}
export default CollapseContainer