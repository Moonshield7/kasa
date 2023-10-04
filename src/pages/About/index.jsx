import styled from "styled-components"
import Collapse from "../../components/Collapse"
import Banner from "../../components/Banner"
import { useEffect, useState } from "react"

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
	const [aboutData, setAboutData] = useState()
	useEffect(() => {
		async function fetchAboutData(){
			const response = await fetch('/data/about.json')
			const data = await response.json()
			setAboutData(data)
		}

		fetchAboutData()
	}, [])

	if(aboutData === undefined){
		return (
			<Container>
				<Banner />
				<CollapseContainer>
				</CollapseContainer>
			</Container>
		)
	}
	return (
		<Container>
			<Banner />
			<CollapseContainer>
				{aboutData.map((section, index) => (
					 <Collapse 
					 key={`${section}-${index}`}
						title={section.title}
						content={section.content}
					 />
				))}
			</CollapseContainer>

		</Container>
	)
}

export default About