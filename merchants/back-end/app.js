const Koa = require('koa');
const app = new Koa();
const json =  require('koa-json');
const bodyParser = require('koa-bodyparser');


const router = require('koa-router')()
const mongoose = require('mongoose');
const cors = require('koa-cors');






mongoose.set('useFindAndModify',false)


app.use(cors());
app.use(json());
app.use(bodyParser());






mongoose.connect('mongodb://root:199723618Jacke@dds-bp18855e35f84744-pub.mongodb.rds.aliyuncs.com:3717/admin',{
	useNewUrlParser:true,
	useUnifiedTopology:true
})
.then((res)=>{
	console.log('sucess connect')
})
.catch((err)=>{
	console.log('fail to connect')
})




// import optim.js

const banner = require('./router/backend/optim.js')
const preferlist = require('./router/functionend/functionend.js')




router.use('/api/banner',banner)
router.use('/api/forshop',preferlist)



app.use(router.routes())
app.use(router.allowedMethods())



app.listen(3000);
console.log('sucess !')