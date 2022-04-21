import React from 'react';
import '../../styles/filtergames.css';
const FilterGames = (props) => {
	const {games, filter, genre} = props

	return (

		<div className='filter_games'>
		<div>
		<input placeholder='Search Game' onKeyUp={(event) => filter(games, event.target.value, genre)}/>
		<img src={process.env.PUBLIC_URL+"/assets/aboutImages/searchgames.png"} alt="img"  className="search_games" />
		</div>
		</div>
	)
}

export default FilterGames
