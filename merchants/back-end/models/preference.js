const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Preferchema = new Schema({
	image:{
		type:String,
		require:true,
		
	},
	title:{
		type:String,
		require:true
	},
	description:{
		type:String,
		require:true
	}
	
},
	{
		versionKey:false
	}
)

module.exports = prefer = mongoose.model('preferdata',Preferchema)
