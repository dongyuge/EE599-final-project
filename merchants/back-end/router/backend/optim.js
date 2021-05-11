const router =  require('koa-router')()

const Username = require('../../models/username.js')
const prefer = require('../../models/preference.js')
const Business = require('../../models/merchantdata.js')
const dishclass = require('../../models/adddished.js')

const {uploading,modify,editfood} = require('../../config/uploads.js')



const initdata = require('../../config/init.js')
const {upload} = require('../../oss/oss.js')


//register
router.post('/register',async ctx=>{
	console.log('success register')
	let {name,password,openid} = ctx.request.body
	
	if(name === ''|| password ===''){
		
		new initdata(ctx).tips('error:empty',202)
		
		return false
	}
	
	const user = new Username({
		name:name,
		password:password,
		openid:openid
	})
	
	await user
	.save() 
	.then((res)=>{
		console.log('sucess store')
	})
	.catch((e)=>{
		console.log('fail store')
	})
})


// login

router.post('/login',async ctx=>{
	let {name,password} = ctx.request.body
	let listdata = await Username.find({name,password})
	if(listdata.length === 0){
		new initdata(ctx).tips('username or password is wrong',202)
	}
	else{
		new initdata(ctx,'SUCCESS',listdata[0].openid,200).listing()
	}
})

// uplaod recommend

router.post('/prefer',upload.single('file'),  async ctx=>{
	//loadimg(ctx.req.file.path)
	
	let {title,description,file} = ctx.req.body
	let obj = {
		title,
		description
	}
	
	await new uploading(ctx,obj,'image',prefer).resultdata()
	
})


// delete prefer

router.post('/deleprefer', async ctx=>{
	let ids = ctx.request.body.ids
	
	let deleteonedata = await preIng()
	new initdata(ctx).listing()
	
	function preIng(){
		return new Promise((resolve,reject)=>{
			prefer.deleteOne({_id:ids},(err,res)=>{
				if(err){
					reject(err)
				}
				else{
					resolve(res)
				}
			})
		})
	}
})

// change prefer

router.post('/updataprefer', upload.single('file'), async ctx=>{
	let {file,title,description,ids} = ctx.req.body
	
	let obj ={
		title,
		description
	}
	if(file === undefined){
		await new modify(ctx,obj,'image',prefer,ids).preference()
	}else{
		await new modify(ctx,obj,'image',prefer,ids).toupdata(file)
	}
	
})

// set merchant

router.post('/oss',upload.single('file'),async ctx=>{
	let {openid,shop,file,initifee,delifee,price,mertype,time} = ctx.req.body
	let obj = {openid,shop,initifee,delifee,price,mertype,time}
	
	await new uploading(ctx,obj,'logo',Business).resultdata()
	
	
})


router.post('/dishes',upload.single('file'),async ctx=>{
	let {openid,name,price} = ctx.req.body
	let obj = {openid,name,price}
	await new uploading(ctx,obj,'image',dishclass).resultdata()
})


router.post('/deledishes',async ctx=>{
	let ids = ctx.request.body.ids
	
	let deleteonedata = await preIng()
	new initdata(ctx).listing()
	
	function preIng(){
		return new Promise((resolve,reject)=>{
			dishclass.deleteOne({_id:ids},(err,res)=>{
				if(err){
					reject(err)
				}
				else{
					resolve(res)
				}
			})
		})
	}
})


router.post('/editdishes',async ctx=>{
	let {file,ids,name,price} = ctx.request.body
	let obj = {name,price}
	console.log(ids)
	console.log(ctx.request.body)
	await new editfood(ctx,obj,'image',dishclass,ids).toupdata()
	
})

module.exports = router.routes()