<template>
  <div class="ordering">

    <div v-if="homemen">
      <div class="home-list">
        <div class="home-title">Set merchant's name</div>
         <el-input v-model="shop" placeholder="please input merchant's name"></el-input>
      </div>
      <!-- logo -->
      <div class="home-list">
        <div class="home-title">uplaod your logo</div>
        <el-upload
          action="#"
          :show-file-list="false"
          list-type="picture-card"
            :auto-upload="false"
          :on-change="successing"
          >
            <img v-if="fileimg" :src="fileimg" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      
      <div class="home-list">
        <div class="home-title">initial fee($)</div>
         <el-input v-model="initifee" placeholder="please input initial fee"></el-input>
      </div>
      
      <div class="home-list">
        <div class="home-title">delivery fee($)</div>
         <el-input v-model="delifee" placeholder="please input delivery fee"></el-input>
      </div>
      
      <div class="home-list">
        <div class="home-title">average price($)</div>
         <el-input v-model="price" placeholder="please input average price"></el-input>
      </div>
      
      <div class="home-list">
        <div class="home-title">type</div>
         <el-input v-model="mertype" placeholder="please input type"></el-input>
      </div>
      
      
      <div class="home-list">
        <div class="home-title">delivery time</div>
         <el-input v-model="time" placeholder="please in put delivery time"></el-input>
      </div>
     

      
      <div class="home-list">
        <el-row>
          <el-button type="success" @click="btNs()">submit</el-button>
          <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
          <el-button type="success" @click="btN2()">view</el-button>
        </el-row>
      </div>
    </div>

    
    <div v-if="!homemen">
      <div class="home-list home-list-homemen">
        <img :src="homeData.logo" />
        <div class="home-title">{{homeData.shop}}</div>
      </div>
      <div class="home-list">
        <div class="home-title">initial fee:{{homeData.initifee}}$</div>
      </div>
      <div class="home-list">
        <div class="home-title">delivery fee:{{homeData.delifee}}$</div>
      </div>
      <div class="home-list">
        <div class="home-title">average price:{{homeData.price}}$</div>
      </div>
      <div class="home-list">
        <div class="home-title">type:{{homeData.mertype}}</div>
      </div>
      
      <div class="home-list">
        <div class="home-title">delivery time:{{homeData.time}} minitues</div>
      </div>
      <div>
        <el-row>
        <el-button type="success" @click="btN()">return</el-button>
        </el-row>
      </div>
      
    </div>

    
    <motal ref="mon"></motal>
  </div>
</template>

<script>
  
  import motal from '../../tips/login.vue'
  import { mapState } from 'vuex';
  import {home} from '../../api/api.js'
  
  import {shopossurl,shopsuccurl} from '../../api/request.js'
  export default{
    components:{
    	motal
    },
    data() {
      return {
        openid:'5dfcf328da83f620e4077103',
        homemen:true,
        homeData:{},
        shop:'',
        initifee: '',
        delifee: '',
        price: '',
        mertype:'',
        time: '',
        dialogVisible: false,
        disabled: false,
        fileimg:'',
        files:''
      }
    },
     methods: {
            successing(file, fileList){
              this.fileimg = file.url
              console.log(file)
              console.log(fileList)
              this.files = file.raw
            },

            btN(){this.homemen = true},
            btN2(){this.homemen = false},
            
          async  btNs(){
              console.log('submit')
              let list = [
                {"openid": this.opendata.opening},
                {"shop": this.shop},
                {"file": this.files},
                {"initifee": this.initifee},
                {"delifee": this.delifee},
                {"price": this.price},
                {"mertype": this.mertype},
                {"time": this.time}
                
              ]

              let  uploading = await new this.myreferto(list).appfrom()

              home(uploading,shopossurl)
              .then((res)=>{
                console.log(res)
                new this.myreferto(list).men()
                if(res.data.msg == 'SUCCESS'){
                 this.homeSucc(res.data.data.openid)
                  new this.mytitle(this.$message,'success','submit successfully').funtitle()
                }else{
                  new this.mytitle(this.$message,'warning',res.data.msg).funtitle()
                }

              })
              .catch((err)=>{
                new this.myreferto(list).men()
                new this.mytitle(this.$message,'info','fail to submit').funtitle()
              })
            },

        
         homeSucc(ids){
           let id = {
             "openid":ids
           }
           home(id,shopsuccurl)
           .then((res)=>{
             console.log(res)
             if(res.data.msg == 'SUCCESS'){
               console.log('123')
               this.homeData = res.data.data[res.data.data.length-1]
               this.homemen = false
             }else{
               this.homemen = true
             }
           })
           .catch((err)=>{
             console.log(err)
           })
         },

     },

     
     mounted() {
       console.log(this.opendata.opening)
       let ids = '5dfcf328da83f620e4077103'
       this.homeSucc(this.opendata.opening)
       // this.homeSucc(ids)
       // if(this.opendata.opening == null){
       //    this.$nextTick(()=>{
       //    	this.$refs.mon.init()
       //    })
       // }else{
       //   this.homeSucc(this.opendata.opening)
       // }
     },

     computed:{
     		...mapState(['opendata'])
     	},


  }
</script>

<style scoped="scoped">
  @import '../../../style/pubiss.css';
  @import '../../../style/table.css';
  .home-list-homemen img{margin-bottom: 20px; width: 150px; height: 150px;
  border-radius: 10px;}
</style>
