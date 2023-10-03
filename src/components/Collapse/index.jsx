import styled from "styled-components"
import arrowUp from "../../utils/assets/arrow_back_ios-24px 2.png"
import arrowDown from "../../utils/assets/arrow_back_ios-24px 1.png"
import colors from "../../utils/style/colors"
import style from "./style.css"
import { useState } from "react"

const Container = styled.div`
	margin-bottom: 25px;
`
const ContainerHeader = styled.div`
	background-color: ${colors.primary};
	display:flex;
	justify-content: space-between;
	padding: 10px 15px;
	border-radius: 10px;
	color: ${colors.white};
	font-size:24px;
`
const Arrow = styled.img`
	&:hover{
		cursor:pointer;
	}
`

const Dropdown = styled.ul`
	background-color: ${colors.gray};
`
const DropdownContent = styled.li`
	list-style: none;
	padding: 25px 15px;
	color: ${colors.primary};
	display:flex;
	flex-direction:column;
`

function Collapse ({title, content}) {
	const [isCollapsed, setIsCollapsed] = useState(false);
	function toggle () {
		setIsCollapsed(!isCollapsed)
		console.log(isCollapsed)
	}

	return (
		<Container className={title === "Equipements" || title === "Description" ? "small" : "wide"}>
			<ContainerHeader>
				<p>{title}</p>
				<Arrow src={isCollapsed ? arrowDown : arrowUp} alt="arrow" onClick={toggle}/>
			</ContainerHeader>
			{isCollapsed ? (<Dropdown>
				<DropdownContent>{title === "Equipements" ? content.map(elem => {return <p key={elem}>{elem}</p>}) : content}</DropdownContent>
			</Dropdown>) : ""}
		</Container>
	)
}



export default Collapse