const initialState = {
    games: [],
    auxiliar: [],
    game:{},
    inShopGames: [],
}

const gamesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'fetchGames':

            return {
                ...state,
                games: action.payload.games,
                auxiliar: action.payload,
            }

        case 'fetchOne':

            return {
                ...state,
                game: action.payload,
                auxiliar: action.payload,
            }
            
        case 'filterGames':

	    console.log(action.payload)

            let filtered = action.payload.games.games.filter((data => data.gameName.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))

	    if(action.payload.genre !== '' && action.payload.genre !== 'All'){
		    filtered = filtered.filter((data) => data.genre.includes(action.payload.genre))
	    }

            return {
                ...state,
                games: [...filtered]
            }

        case 'addToShop':

		    if (state.inShopGames.find((game) => game?._id == action.payload.game?._id) == undefined){
			    let inShopGames = [...state.inShopGames]
			    inShopGames.push(action.payload.game)

			    return {
				    ...state,
				    inShopGames
			    }
		    } 


	case 'deleteFromShop':
		    let inShopGames = [...state.inShopGames]
		    let modifiedShop = inShopGames.filter((game) => game._id !== action.payload.game._id)

		    return {
			    ...state,
			    inShopGames:modifiedShop
		    }

        default:
            return state
    }
}

export default gamesReducer
