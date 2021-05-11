const multer = require('koa-multer');
//const uploadSingle = multer.single('file')

let oss = require('ali-oss');

let client = new oss({
	region:'oss-cn-hangzhou',
	accessKeyId: '',
	accessKeySecret:'',
	bucket:'ee599'
});




let storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'storageimg/')
	},
	filename:(req,file,cb)=>{
		let fileFormat = (file.originalname).split(".")
		cb(null,Date.now()+"."+fileFormat[fileFormat.length-1])
	}
})

let upload = multer({storage})

let loadimg = function(imgpath){
	return new Promise((resolve,reject)=>{
		client.put('prefer/'+imgpath,imgpath)
		.then((res)=>{
			//console.log(res)
			resolve(res.url)
		})
		.catch((err)=>{
			//console.log(err)
			reject(err)
		})
	})
}


module.exports = {upload,loadimg}
