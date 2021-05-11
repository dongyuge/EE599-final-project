<template>
  <div class="ordering">
      
      <div class="btns">
        <el-row class="btns-lable">
        
        </el-row>
        <el-row>
        <router-link to="/addto">
             <el-button type="success">add goods</el-button>
        </router-link>
        </el-row>
      </div>
      
      <div class="var-table" v-if="noety">
        
        <div class="var-title">
          <div v-for="(item,index) in tableData" :key="index">{{item}}</div>
        </div>
        
        <div>
          <div class="var-content" v-for="(item,index) in contarr" :key="index">
            <div>{{item.name}}</div>
            <div>{{item.price}}</div>
            
            <div class="operation">
              <span @click="deItety(item)">edit</span>
              <span @click="deLeety(item._id,item.name)">delete</span>
            </div>
          </div>
        </div>
      </div>

      
      <div class="nodatas" v-if="!noety">
        no results
      </div>
     
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import {home} from '../../api/api.js'
  
  import {getdishesurl,deledishesurl} from '../../api/request.js'
  export default {
        data() {
          return {
            noety:true,
            tableData: ['goods','price','operation'],
            id:'5dfcf328da83f620e4077103',
            contarr:[]
          }
        },

		methods:{
			
			geTdata(){
			  let id = {
			    "openid":this.opendata.opening,
			  }
			  home(id,getdishesurl)
			  .then((res)=>{
			    console.log(res)
			    if(res.data.msg == 'SUCCESS'){
            this.contarr = res.data.data
			      this.noety = true
			    }else{
			      this.noety = false
			    }

			  })
			  .catch((err)=>{
			    console.log(err)
			  })
			},
      deItety(itemdata){
        this.$router.push({name:'editfood',params:{datas:itemdata}});
      },

      
      deLeety(ids,name){
        console.log(ids)
        let msg = 'delete ' + name + ' Do you continue?'
          this.$confirm(msg, 'mention', {
            confirmButtonText: 'confirm',
            cancelButtonText: 'cancel',
            type: 'warning'
          }).then((action) => {
            if(action === 'confirm'){
                  console.log('click confirm')
                  this.deLeapi(ids)
            }

          }).catch(() => {
            console.log('click cancel')
            new this.mytitle(this.$message,'success','cancel delete').funtitle()
          });
        },

        
        deLeapi(ids){
          let id = {
            "ids":ids,
          }
          home(id,deledishesurl)
          .then((res)=>{
            
            console.log(res)
            this.geTdata()
            new this.mytitle(this.$message,'success','delete successfully').funtitle()
          })
          .catch((err)=>{
            console.log(err)
            new this.mytitle(this.$message,'info','fali to delete').funtitle()
          })
        },

		},

    mounted() {
       this.geTdata()
    },

    computed:{
    		...mapState(['opendata'])
    },

      }
</script>

<style scoped="scoped">
  @import '../../../style/pubiss.css';
  a：hover{cursor:pointer}
  .btns{display: flex; justify-content: flex-end;}
  .btns-lable{margin-right: 20px;}
  .var-title{background: #f5f7fa; height: 50px; display: flex; justify-content: space-around;
  align-items: center; font-weight: bold;
  color: #909399;
  }
  .var-title div{width: 200px; text-align: center;}
  .var-table{margin-top: 20px;}
  
  .var-content{display: flex; justify-content: space-around; align-items: center;
  height: 50px;
  border-bottom: 1px solid #ebebeb;}
  .var-content div{width: 200px; text-align: center;}
  .operation{display: flex; align-items: center; justify-content: space-around;}
  .operation span:nth-child(1){background-color: #ecf5ff;
  color: #409eff;
  border: 1px solid #d9ecff;
  border-radius: 4px;
  padding: 5px 10px;
  cursor:pointer}
  .operation span:nth-child(2){color: #fff;
    background-color: #f56c6c;
    border-radius: 4px;
    padding: 5px 10px;
    cursor:pointer}
  
  .nodatas{text-align: center;
  padding-top: 100px;
  color: #C0C4CC;}
</style>
