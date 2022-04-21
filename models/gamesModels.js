const mongoose = require('mongoose')

const gamesSchema = new mongoose.Schema({
    gameName:{type:String, required:true},
	genre:{type:Array, required:true},
	src:{type:String, required:true},
	size:{type:Number, required:true},
	workson:{type:String, required:true},
	company:{type:String, required:true},
	description:{type:String, required:true},
	requirements:[{
		processor:{type:String, required:true},
		memory:{type:Number, required:true},
		graphics:{type:String, required:true},
		storage:{type:Number, required:true},
	}],
	price:{type:Number, required:true},
	images:{type:Array, required:true}
})

const Games = mongoose.model('games', gamesSchema)

module.exports = Games
