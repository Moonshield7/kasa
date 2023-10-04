import styled from "styled-components"
import Tag from "../Tag"

const TagContainer = styled.ul`
	width: 70%;
	display:flex;
`

function TagList({tags}) {
	return (<TagContainer>
		{tags.map((tag, index) => {
			return <Tag 
			key={`${tag}-${index}`}
				tag={tag} />
		})}
	</TagContainer>)
}

export default TagList