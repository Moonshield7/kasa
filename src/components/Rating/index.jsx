import activeStar from "../../utils/assets/star-active 3.png"
import inactiveStar from "../../utils/assets/star-inactive 1.png"

function Rating({numberOfStars}) {
	const rating = parseInt(numberOfStars);

	switch(rating) {
		case 1:
			return (<div>
				<img src={activeStar} alt="Etoile pleine" />
				<img src={inactiveStar} alt="Etoile vide" />
				<img src={inactiveStar} alt="Etoile vide" />
				<img src={inactiveStar} alt="Etoile vide" />
				<img src={inactiveStar} alt="Etoile vide" />
			</div>)
		case 2:
			return (<div>
				<img src={activeStar} alt="Etoile pleine" />
				<img src={activeStar} alt="Etoile pleine" />
				<img src={inactiveStar} alt="Etoile vide" />
				<img src={inactiveStar} alt="Etoile vide" />
				<img src={inactiveStar} alt="Etoile vide" />
			</div>)
		case 3:
			return (<div>
				<img src={activeStar} alt="Etoile pleine" />
				<img src={activeStar} alt="Etoile pleine" />
				<img src={activeStar} alt="Etoile pleine" />
				<img src={inactiveStar} alt="Etoile vide" />
				<img src={inactiveStar} alt="Etoile vide" />
			</div>)
		case 4:
			return (<div>
				<img src={activeStar} alt="Etoile pleine" />
				<img src={activeStar} alt="Etoile pleine" />
				<img src={activeStar} alt="Etoile pleine" />
				<img src={activeStar} alt="Etoile pleine" />
				<img src={inactiveStar} alt="Etoile vide" />
			</div>)
		case 5:
			return (<div>
				<img src={activeStar} alt="Etoile pleine" />
				<img src={activeStar} alt="Etoile pleine" />
				<img src={activeStar} alt="Etoile pleine" />
				<img src={activeStar} alt="Etoile pleine" />
				<img src={activeStar} alt="Etoile pleine" />
			</div>)
		default:
			return (<div>
				<img src={inactiveStar} alt="Etoile vide" />
				<img src={inactiveStar} alt="Etoile vide" />
				<img src={inactiveStar} alt="Etoile vide" />
				<img src={inactiveStar} alt="Etoile vide" />
				<img src={inactiveStar} alt="Etoile vide" />
			</div>)
	}

}

export default Rating