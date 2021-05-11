const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BusinessSchema = new Schema({
	openid:{
		type:String,
		required:true
	},
	shop:{
		type:String,
		required:true
	},
	logo:{
		type:String,
		required:true
	},
	initifee:{
		type:Number,
		required:true
	},
	delifee:{
		type:Number,
		required:true
	},
	price:{
		type:Number,
		required:true
	},
	mertype:{
		type:String,
		required:true
	},
	time:{
		type:Number,
		required:true
	}
},
	{
		versionKey:false
	}
)

module.exports = Business = mongoose.model('business',BusinessSchema)