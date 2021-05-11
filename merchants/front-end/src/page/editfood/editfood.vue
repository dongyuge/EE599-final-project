<template>
  <div class="ordering">
      
      
      
      <div class="home-list">
        <div class="home-title">name</div>
         <el-input v-model="name" placeholder="please input name"></el-input>
      </div>
      
      <div class="home-list">
        <div class="home-title">price</div>
         <el-input v-model="price" placeholder="please input price"></el-input>
      </div>

      
      <div class="home-list">
        <el-row>
          
          <el-button type="success" @click="btNs()">submit</el-button>
          <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
          
          <router-link to="/variety">
             <el-button type="success">return</el-button>
          </router-link>
          
        </el-row>
        
        
        
      </div>
      
  </div>
</template>

<script>
  import {home} from '../../api/api.js'
  
  import {editfoodurl} from '../../api/request.js'
  
  export default{
    data() {
      return {
        name:'',
        price:'',
        title:'',
        description:'',
        fileimg:'',
        files:'',
        ids:'',
        upfile:''
      }
    },
     methods: {
       
        

        
       async btNs(){
          console.log('submit')
          let list = {
            "ids": this.ids,
            "name": this.name,
            "price": this.price
          }
          
          
          home(list,editfoodurl)
          .then((res)=>{
            new this.myreferto(list).men()
            console.log('yes!')
            console.log(res)
            if(res.data.msg == 'SUCCESS'){
              new this.mytitle(this.$message,'success','modify sucessfully').funtitle()
            }else{
              new this.mytitle(this.$message,'warning',res.data.msg).funtitle()
            }
          })
          .catch((err)=>{
            new this.myreferto(list).men()
            new this.mytitle(this.$message,'info','fail to modify').funtitle()
          })
        },

     },

     
     mounted() {
       
       console.log(this.$route.params.datas._id)
       console.log(this.$route.params.datas.name)
       console.log(this.$route.params.datas.price)

       let dataedit = this.$route.params.datas
       
       this.name = dataedit.name
       this.price = dataedit.price
       this.ids = dataedit._id
     }

     
    


  }
</script>

<style scoped="scoped">
  @import '../../../style/pubiss.css';
  @import '../../../style/table.css';
  
  
</style>
