const Router = require('express').Router();

const validator = require('../config/validator')
const passport = require('../config/passport')

const usersControllers = require('../controllers/userControllers.js')
const gamesControllers = require('../controllers/gamesControllers.js')

const { get_games, get_game, set_game, delete_game, modify_game, game_id, uploadGames } = gamesControllers
const { verify_email, sign_up_users, log_in_users, verify_token } = usersControllers

//GAMES

Router.route('/games')
	.get(get_games)
	.post(set_game)
Router.route('/games/:id')
	.get(game_id)
	.delete(delete_game)
Router.route('/games/modify')
	.put(passport.authenticate('jwt', { session: false }), modify_game)
Router.route('/games/upload')
	.post(passport.authenticate('jwt', { session: false }), uploadGames)


//USERS

Router.route('/auth/signUp')
	.post(sign_up_users)

Router.route('/auth/logIn')
	.post(log_in_users)

Router.route('/verify/:uniqueString')
	.get(verify_email)

Router.route('/auth/signInToken')
	.get(passport.authenticate('jwt', { session: false }), verify_token)

module.exports = Router
