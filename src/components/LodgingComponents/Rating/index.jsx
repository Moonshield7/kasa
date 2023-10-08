import styled from "styled-components";
import activeStar from "../../../utils/assets/star-active 3.png"
import inactiveStar from "../../../utils/assets/star-inactive 1.png"

const Star = styled.img`
	@media screen and (max-width:390px){
		width: 18px;
		height: 18px;
	}
`

function Rating({numberOfStars}) {
	const rating = parseInt(numberOfStars);

	switch(rating) {
		case 1:
			return (<div>
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={inactiveStar} alt="Etoile vide" />
				<Star src={inactiveStar} alt="Etoile vide" />
				<Star src={inactiveStar} alt="Etoile vide" />
				<Star src={inactiveStar} alt="Etoile vide" />
			</div>)
		case 2:
			return (<div>
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={inactiveStar} alt="Etoile vide" />
				<Star src={inactiveStar} alt="Etoile vide" />
				<Star src={inactiveStar} alt="Etoile vide" />
			</div>)
		case 3:
			return (<div>
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={inactiveStar} alt="Etoile vide" />
				<Star src={inactiveStar} alt="Etoile vide" />
			</div>)
		case 4:
			return (<div>
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={inactiveStar} alt="Etoile vide" />
			</div>)
		case 5:
			return (<div>
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={activeStar} alt="Etoile pleine" />
				<Star src={activeStar} alt="Etoile pleine" />
			</div>)
		default:
			return (<div>
				<Star src={inactiveStar} alt="Etoile vide" />
				<Star src={inactiveStar} alt="Etoile vide" />
				<Star src={inactiveStar} alt="Etoile vide" />
				<Star src={inactiveStar} alt="Etoile vide" />
				<Star src={inactiveStar} alt="Etoile vide" />
			</div>)
	}

}

export default Rating