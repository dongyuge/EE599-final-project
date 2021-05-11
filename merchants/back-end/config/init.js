class initdata{
	constructor(ctx,msg='SUCCESS',data=[],code=200) {
	    this.ctx = ctx
		this.msg = msg
		this.data = data
		this.code = code
	}
	
	
	listing(){
		this.ctx.body={
			msg:this.msg,
			data:this.data
		}
		
		this.ctx.status = this.code
			
		
	}
	
	
	tips(tipmsg,tipcode){
		this.ctx.body={
			msg:tipmsg
			
		}
		
		this.ctx.status = tipcode
	}
}

module.exports = initdata