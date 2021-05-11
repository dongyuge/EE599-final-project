const router = require('koa-router')()

const initdata = require('../../config/init.js')

const prefer = require('../../models/preference.js')
const Business = require('../../models/merchantdata.js')
const dishclass = require('../../models/adddished.js')

router.get('/getprefer',async ctx=>{
	let listdata = await prefer.find()
	if(listdata.length === 0){
		new initdata(ctx,'no results',listdata,200).listing()
	}
	else{
		new initdata(ctx,'SUCCESS',listdata,200).listing()
	}
})


// get merchant information

router.post('/shop', async ctx=>{
	const openid = ctx.request.body.openid
	console.log(openid)
	if(openid === ''){
		new initdata(ctx).tips('empty',202)
		return false
	}
	
	let listdata = await Business.find({openid})
	if (listdata.length === 0){
		new initdata(ctx,'no results',listdata,200).listing()
	}
	else{
		new initdata(ctx,'SUCCESS',listdata,200).listing()
	}
	
})

// get all merchant
router.get('/wxshop',async ctx=>{
	let listdata = await Business.find()
	if(listdata.length === 0){
		new initdata(ctx,'no result',listdata,200).listing()
	}
	else{
		new initdata(ctx,'SUCCESS',listdata,200).listing()
	}
})

router.post('/getdishes',async ctx=>{
	let {openid} = ctx.request.body
	const listdata = await dishclass.find({openid})
	if(listdata.length === 0){
		new initdata(ctx,'no results',listdata,200).listing()
	}else{
		new initdata(ctx,'SUCCESS',listdata,200).listing()
	}
})

module.exports = router.routes()