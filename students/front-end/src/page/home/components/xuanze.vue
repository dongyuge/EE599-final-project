<template>
    <div>
        <div class="delica-view">
			<div class="delica-list delica-grow" @click="multiple()">
				<span>{{synthesize}}</span>
				<img src="../../../assets/image/coen/paixu.png" >
				
			</div>
			<div class="delica-grow" @click="sales()">sale</div>
			<div class="delica-grow" @click="sales()">speed</div>
			<div class="delica-list delica-right" @click="scReen()">
				<span>select</span>
				<img src="../../../assets/image/coen/shaixuan.png" >
			</div>
		</div>


        <div class="sortlist sortliteltle" v-if="drop" >
			<div v-for="(item,index) in sortlist" :key="index">
				<span :class="{activeb:index == num}" @click="sortClick(index,item.name)">{{item.name}}</span>
			</div>
		</div>

        <div class="sortlist sortlist-view" v-if="sortmen">
						
			<div class="multiple">
            <div v-for="(item,index) in screendata" :key="index">
			<div>
				<div class="sortlist-title">{{item.title}}</div>
				<div class="sortlist-flex">
					<div v-for="(itemdata,indexs) in item.datas" :key="indexs">
					<span class="Choice" :class="{scractive: itemdata.id === 2}" @click="screenchoIce(indexs,itemdata.sign)">{{itemdata.name}}</span>
					</div>
				</div>
			</div>
			</div>
			
			<div v-for="(item,index) in person" :key="index">
			<div>
				<div class="sortlist-title">{{item.title}}</div>
				<div class="sortlist-flex">
					<div v-for="(itemdata,indexs) in item.datas" :key="indexs">
					<div class="Choice"  :class="{scractive: indexs == scrnum}" @click="personchoIce(indexs,itemdata.per)">{{itemdata.name}}</div>
					</div>
				</div>
			</div>
			</div>
            </div>
			<div class="sortlist-bottom">
					<span @click="emPty()">clear</span>
					<span @click="flag && compLete()">finish</span>
			</div>
		</div>
		
		
    </div>

</template>


<script>
    export default{
        name:'xuanze',
        data(){
            return{
                num:0,
                scrnum:-1,
                sortmen:false,
				yin:false,
                synthesize:"comprehensive sort",
                drop:false,
                sortlist:[
                    {
						"name":"comprehensive sort",
						"screen":"_id",
						"nums":1
					},
					{
						"name":"lower delivery fee",
						"screen":"delivering",
						"nums":1
					},
					{
						"name":"lower average price",
						"screen":"capita",
						"nums":1
					}
                ],
                screendata:[
					{
						"title":"merchants(multiple)",
						"datas":[
							{
								"id":1,
								"sign":"duration",
								"name":"fast"
							},
							{
								"id":1,
								"sign":"deliver",
								"name":"delivery fee"
							}
						]
					}
				],
				person:[
					{
						"title":"average price",
						"datas":[
							{
								"name":"<20$",
								"per":{
									"$lt":20
								}
							},
							{
								"name":"20-40$",
								"per":{
									"$lte":40,
									"$gte":20
								}
							},
							{
								"name":">40$",
								"per":{
									"$gt":40
								}
							}
						]
					}
				]
            }
        },
        methods:{
            sortClick(index,name){
				this.num=index
				this.synthesize = name
				this.drop=false
			},
            multiple(){
				this.drop=true
				this.sortmen=false
				
			},
            sales(){
				this.drop=false
				this.sortmen=false
			},
            scReen(){
				this.drop=false
				this.sortmen = true
			},
            screenchoIce(indexs,sign)
			{
				if(this.screendata[0].datas[indexs].id==1){
					this.screendata[0].datas[indexs].id = 2
				}
				else{
					this.screendata[0].datas[indexs].id = 1
				}
				
			},
			personchoIce(indexs,per){
				if(this.scrnum == indexs){
					this.scrnum = -1
				}
				else{
					this.scrnum = indexs
				}
				
			},
			emPty(){
				this.screendata.forEach( (item) =>{
					let arr = item.datas.map((items) =>{
						items.id = 1
						return items
					})
					
				})
				this.scrnum = -1
			}
        },
    }

</script>




<style scoped>

.delica-view img{width: 20px; height: 20px; display: block;
			}

.delica-view{font-size: 20px; display: flex; 
		color: #666666;
		
		margin-top: 20px;
        margin-left: 350px;
        margin-right: 400px;
		background: #FFFFFF;
		} 


.delica-list{display: flex; align-items: center;}
.delica-grow{flex-grow: 0.3;}
.delica-right{justify-content: flex-end; flex-grow: 4;}


.sortlist{background: #ffffff;}
			.sortliteltle span{
			padding: 0 15px;
			display: block;
			font-size: 20px;
			height: 30px;
			line-height: 30px;
            margin-left: 350px;
			
			}
			.activeb {
					color: #f89903 !important;
				}


			.sortlist-title{
			font-size: 5px;
			height: 10px;
			line-height: 10px;}
			.Choice{font-size: 15px; background: #f8f8f8;
			height: 30px;
			line-height: 30px;
			color: #666666;
			width: 120px !important;
			margin: 7.5px;
			text-align: center;
			display: block;
			border-radius: 5px;
			}
			.sortlist-flex{
				display: flex; 
				
				margin-bottom: 30px;
			}
			.sortlist-bottom{background: #ffffff; height: 80px;
			margin-left: 120px;
            margin-right: 130px;
			display: flex; 
			align-items: center;
			justify-content: space-around;
			}
			.sortlist-bottom span{font-size:20px;width:150px; height: 25px;
			line-height: 25px;
			text-align: center;}
			.sortlist-bottom span:nth-child(1){border-right: 1px solid #e4e4e4; background-color: #999999;}
			.sortlist-bottom span:nth-child(2){background-color: #999999;}
			.yin{background: rgba(0,0,0,0.5); position: fixed; top: 0; left: 0; right: 0; bottom: 0;}
			
			.scractive{background: #fef6df !important; color: #f29909 !important;}
			.yin{background: rgba(0,0,0,0.5); position: fixed; top: 0; left: 0; right: 0; bottom: 0;}
			.sortlist-title{padding: 0 15px;
				font-size: 20px;
				height: 40px;
				line-height: 40px;
				color: #f89903;}
	.scractive{background: #fef6df !important; color: #f29909;}
	.multiple{margin-left: 350px;}	
</style>