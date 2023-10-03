import styled from "styled-components"
import Collapse from "../../components/Collapse"
import data from "../../data/about.json"

const Container = styled.div`
margin: 35px 0;
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
`

function About () {
	return (
		<Container>
			{data.map((section, id) => (
				 <Collapse 
					key={id}
					title={section.title}
					content={section.content}
				 />
			))}
		</Container>
	)
}

export default About