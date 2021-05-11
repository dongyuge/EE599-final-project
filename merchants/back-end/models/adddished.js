const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dishSchema = new Schema({
	openid:{
		type:String,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	price:{
		type:Number,
		required:true
	},
	image:{
		type:String,
		required:true
	}
},
{
	versionKey:false
}
)


module.exports = dishclass = mongoose.model('dishes',dishSchema)