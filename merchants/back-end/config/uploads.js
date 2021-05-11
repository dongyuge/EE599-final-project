let {loadimg} = require('../oss/oss.js')



class uploading{
	constructor(ctx,obj,image,prefer) {
	    this.ctx = ctx,
		this.obj = obj,
		this.image = image,
		this.prefer = prefer
	}
	
	async resultdata(){
		let upimg = await this.upimgFun()
		this.obj[this.image] = upimg
		
		//store to mongo
		try{
		let optidata = await this.optiData(this.obj)
		this.pull('SUCCESS',optidata,201)
		console.log('successful to mongo')}
		
		catch(e){
			this.pull('fail',[],500)
			console.log('fail to mongo')
		}
		
	}
	
	
	upimgFun(){
		return new Promise((resolve,reject)=>{
			loadimg(this.ctx.req.file.path)
			.then((res)=>{
				resolve(res)
			})
			.catch((err)=>{
				reject(err)
			})
		})
	}
	
	optiData(obj){
		return new Promise((resolve,reject)=>{
			new this.prefer(obj)
			.save()
			.then((res)=>{
				resolve(res)
			})
			.catch((err)=>{
				reject(err)
			})
		})
	}
	
	//reponse
	pull(msg,data,code){
		this.ctx.body = {
			msg:msg,
			data:data
		}
		this.ctx.status = code
	}
	
	
}


// change picture

class modify extends uploading{
	constructor(ctx,obj,image,prefer,ids) {
		super(ctx,obj,image,prefer)
		this.ids = ids
	}
	
	async preference(){
		let upimg = await this.upimgFun()
		let toupdata = await this.toupdata(upimg)
		
	}
	
	toupdata(upimg){
		return new Promise((resolve,reject)=>{
			this.obj[this.image] = upimg
			this.prefer.findByIdAndUpdate({_id:this.ids},this.obj,
			(err,res)=>{
				if(err){
					reject(err)
				}else{
					resolve(res)
					this.pull('SUCCESS',[],201)
				}
			})
				
			
		})
	}
}

class editfood extends uploading{
	constructor(ctx,obj,image,prefer,ids) {
		super(ctx,obj,image,prefer)
		this.ids = ids
	}
	toupdata(){
		return new Promise((resolve,reject)=>{
			
			this.prefer.findByIdAndUpdate({_id:this.ids},this.obj,
			(err,res)=>{
				
				if(err){
					reject(err)
				}else{
					resolve(res)
					this.pull('SUCCESS',[],201)
				}
			})
				
			
		})
	}
	
}




module.exports = {uploading,modify,editfood}