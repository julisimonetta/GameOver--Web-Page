import { combineReducers } from "redux";
import gamesReducer from './gamesReducer.js'
import usersReducer from './usersReducer.js'

const mainReducer = combineReducers({
	gamesReducer,
	usersReducer
})

export default mainReducer;
