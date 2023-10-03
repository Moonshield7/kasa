import styled from "styled-components"
import Collapse from "../../components/Collapse"
import data from "../../data/about.json"
import Banner from "../../components/Banner"

const Container = styled.div`
min-height: 650px;
margin-bottom: 35px;
display:flex;
flex-direction: column;
align-items:center;
`
const CollapseContainer = styled.div`
width:100%;
display:flex;
flex-direction: column;
align-items:center;
padding-top:65px;
`

function About () {
	return (
		<Container>
			<Banner />
			<CollapseContainer>
				{data.map((section, id) => (
					 <Collapse 
						key={id}
						title={section.title}
						content={section.content}
					 />
				))}
			</CollapseContainer>

		</Container>
	)
}

export default About