const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Nameschema = new Schema({
	name:{
		type:String,
		require:true,
		
	},
	password:{
		type:String,
		require:true
	},
	openid:{
		type:String,
		require:true
	}
},
	{
		versionKey:false
	}
)

module.exports = Username = mongoose.model('usernamedata',Nameschema)

