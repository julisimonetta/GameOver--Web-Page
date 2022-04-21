const Games = require('../models/gamesModels')
const crypto = require('crypto')

const gamesControllers = {
	get_games: async(req, res) => {
		let games
		let error = null
		
		try{
			games = await Games.find()
		}
		catch(err){
			error = err
			console.log(error)
		}
		res.json({
			response:error ? 'ERROR' : {games},
			success:error ? false : true,
			error:error
		})
	},
	game_id: async(req, res) => {
		let games
		let error = null
		const id = req.params.id
		try{
			games = await Games.findOne({ _id: id })
		}
		catch(err){
			error = err
			console.log(error)
		}
		res.json({
			response:error ? 'ERROR' : {games},
			success:error ? false : true,
			error:error
		})
	},
	set_game: async(req, res) => {
		const {gameName, genre, src, size, workson, company, description, requirements, price, images} = req.body

		new Games({
			gameName,
			genre,
			src,
			size,
			workson, 
			company, 
			description,
			requirements,
			price,
			images
		}).save()

		.then((answer) => res.json({answer}))
	},

	delete_game: async(req, res) => {

		let games
		let error = null
		const id = req.params.id

		try{
			games = await Games.findOneAndDelete({ _id: id })
		}
		catch(err){
			error = err
			console.log(error)
		}
		res.json({
			response:error ? 'ERROR' : {games},
			success:error ? false : true,
			error:error
		})

	},

	modify_game: async(req, res) => {

		const file  = req.files.file[0]
		const fileOne  = req.files.file[1]
		const fileTwo  = req.files.file[2]
		const fileThree  = req.files.file[3]
		const fileFour  = req.files.file[4]


                const id = req.body.id
		const name = req.body.name
		const genre = req.body.genre
		const size = req.body.size
		const workson = req.body.workson
		const company = req.body.company
		const description = req.body.description
		const processor = req.body.processor
		const memory = req.body.memory
		const graphics = req.body.graphics
		const storage = req.body.storage
		const price = req.body.price

		const filename = crypto.randomBytes(10).toString('hex') + '.' + file.name.split('.')[file.name.split('.').length - 1]
		let route = `${__dirname}/../frontend/public/assets/gamesImages/${filename}`
		file.mv(route, err => { 
			if(err){
				console.log(err)
			}else{
				console.log('uploaded file')
			}
		})

		const filenameone = crypto.randomBytes(10).toString('hex') + '.' + fileOne.name.split('.')[fileOne.name.split('.').length - 1]
		route = `${__dirname}/../frontend/public/assets/productImages/${filenameone}`
		fileOne.mv(route, err => { 
			if(err){
				console.log(err)
			}else{
				console.log('uploaded file')
			}
		})

		const filenametwo = crypto.randomBytes(10).toString('hex') + '.' + fileTwo.name.split('.')[fileTwo.name.split('.').length - 1]

		route = `${__dirname}/../frontend/public/assets/productImages/${filenametwo}`
		fileTwo.mv(route, err => { 
			if(err){
				console.log(err)
			}else{
				console.log('uploaded file')
			}
		})

		const filenamethree = crypto.randomBytes(10).toString('hex') + '.' + fileThree.name.split('.')[fileThree.name.split('.').length - 1]
		route = `${__dirname}/../frontend/public/assets/productImages/${filenamethree}`
		fileThree.mv(route, err => { 
			if(err){
				console.log(err)
			}else{
				console.log('uploaded file')
			}
		})

		const filenamefour = crypto.randomBytes(10).toString('hex') + '.' + fileFour.name.split('.')[fileFour.name.split('.').length - 1]
		route = `${__dirname}/../frontend/public/assets/productImages/${filenamefour}`
		fileFour.mv(route, err => { 
			if(err){
				console.log(err)
			}else{
				console.log('uploaded file')
			}
		})

		let updatedGame = await Games.findOneAndUpdate({_id:id},{
			gameName: name,
			src: filename,
			genre: genre,
			size: size,
			workson: workson,
			company: company,
			description: description,
			requirements: {processor:processor, memory:memory, graphics:graphics, storage:storage},
			price: price,
			images: [filenameone, filenametwo, filenamethree, filenamefour]
		}
		)

		.then((answer) => res.json({answer}))
	},

	uploadGames: async (req, res) =>{
		const file  = req.files.file[0]
		const fileOne  = req.files.file[1]
		const fileTwo  = req.files.file[2]
		const fileThree  = req.files.file[3]
		const fileFour  = req.files.file[4]
		const name = req.body.name
		const genre = req.body.genre
		const size = req.body.size
		const workson = req.body.workson
		const company = req.body.company
		const description = req.body.description
		const processor = req.body.processor
		const memory = req.body.memory
		const graphics = req.body.graphics
		const storage = req.body.storage
		const price = req.body.price



		try{
			const gameExists = await Games.findOne({gameName: name})

			if(gameExists){
				res.json({
					response: 'Game already exists',
					success: false
				})
			}else{
				const filename = crypto.randomBytes(10).toString('hex') + '.' + file.name.split('.')[file.name.split('.').length - 1]
				let route = `${__dirname}/../frontend/public/assets/gamesImages/${filename}`
				file.mv(route, err => { 
					if(err){
						console.log(err)
					}else{
						console.log('uploaded file')
					}
				})

				const filenameone = crypto.randomBytes(10).toString('hex') + '.' + fileOne.name.split('.')[fileOne.name.split('.').length - 1]
				route = `${__dirname}/../frontend/public/assets/productImages/${filenameone}`
				fileOne.mv(route, err => { 
					if(err){
						console.log(err)
					}else{
						console.log('uploaded file')
					}
				})

				const filenametwo = crypto.randomBytes(10).toString('hex') + '.' + fileTwo.name.split('.')[fileTwo.name.split('.').length - 1]

				route = `${__dirname}/../frontend/public/assets/productImages/${filenametwo}`
				fileTwo.mv(route, err => { 
					if(err){
						console.log(err)
					}else{
						console.log('uploaded file')
					}
				})

				const filenamethree = crypto.randomBytes(10).toString('hex') + '.' + fileThree.name.split('.')[fileThree.name.split('.').length - 1]
				route = `${__dirname}/../frontend/public/assets/productImages/${filenamethree}`
				fileThree.mv(route, err => { 
					if(err){
						console.log(err)
					}else{
						console.log('uploaded file')
					}
				})

				const filenamefour = crypto.randomBytes(10).toString('hex') + '.' + fileFour.name.split('.')[fileFour.name.split('.').length - 1]
				route = `${__dirname}/../frontend/public/assets/productImages/${filenamefour}`
				fileFour.mv(route, err => { 
					if(err){
						console.log(err)
					}else{
						console.log('uploaded file')
					}
				})


				const newGame = await new Games({
					gameName: name,
					src: filename,
					genre: genre,
					size: size,
					workson: workson,
					company: company,
					description: description,
					requirements: {processor:processor, memory:memory, graphics:graphics, storage:storage},
					price: price,
					images: [filenameone, filenametwo, filenamethree, filenamefour]
				})

				await newGame.save()
				res.json({
					success: true,
					message: 'Game uploaded successfully'
				})
				
			}
		}catch(error){
			console.log(error)
			res.json({success: false, message:'Try again'})
		}

	}


}

module.exports = gamesControllers
