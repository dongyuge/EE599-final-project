<template>
  <div class="ordering">
    
   
    <div class="home-list">
      <div class="home-title">name</div>
       <el-input v-model="input" placeholder="please input name"></el-input>
    </div>
    
      
   
    <div class="home-list">
      <div class="home-title">price$</div>
       <el-input v-model="Price" placeholder="please input price"></el-input>
    </div>
   
    <!--
    <div class="home-list">
      <div class="home-title">upload picture</div>
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
    -->
    
    <div class="home-list">
      <el-row>
        <el-button type="success" @click="btNs()">submit</el-button>
        <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
         <router-link to="/variety">
             <el-button type="success">return</el-button>
          </router-link>
          
      </el-row>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import {home} from '../../api/api.js'
 
  import {dishesurl,getshopcalssurl} from '../../api/request.js'
  export default{
    data() {
      return {
        
        input: '',
       
        tags:[],
      
        Price:'',
        
        Discount:'',
        
        optidata:'',
        
        files:'',
        fileimg:'',
        
        unique:'',
        options: [],
        value: '',
        id:'5dfcf328da83f620e4077103'
      }
    },
     methods: {
       
            /*successing(file, fileList){
              this.fileimg = file.url
              this.files = file.raw
            },
            */
            
            listmin(val){
              console.log(val)
              this.options.forEach((item)=>{
                  if(item._id === val){
                    console.log(item.classdata)
                    this.optidata = item.classdata
                  }
              })
            },

            
            handleClose(tag) {
              console.log(tag)
              this.tags.splice(tag,1)
            },

            
            addIing(){
              if(this.unique != ''){
                console.log(this.unique)
                this.tags.push(this.unique)
                let newarr = Array.from(new Set(this.tags))
                this.tags = newarr
                this.unique = ''
              }
            },

            
           async btNs(){
              console.log('submit')
              //let tags = JSON.stringify(this.tags)
              let list = [
                {"openid": this.opendata.opening},
              
                
                {"name": this.input},
                
                {"price": this.Price},
                
                {"file": this.files}
              
              ]
              
              let  uploading = await new this.myreferto(list).appfrom()
              
              home(uploading,dishesurl)
              .then((res)=>{
                new this.myreferto(list).men()
                console.log(res)
                if(res.data.msg == 'SUCCESS'){
                  new this.mytitle(this.$message,'success','submit sucessfully').funtitle()
                }else{
                  new this.mytitle(this.$message,'warning',res.data.msg).funtitle()
                }
              })
              .catch((err)=>{
                new this.myreferto(list).men()
                new this.mytitle(this.$message,'info','fail to submit').funtitle()
              })
            },

            
            geTdata(){
              let id = {
                "openid":this.opendata.opening,
              }
              home(id,getshopcalssurl)
              .then((res)=>{
                console.log(res)
                if(res.data.msg == 'SUCCESS'){
                  // this.noclass = false
                  this.options = res.data.data
                }else{
                  // this.noclass = true
                }

              })
              .catch((err)=>{
                console.log(err)
              })
            },

         },
         //
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
  @import '../../../style/table.css';
  .el-select{width: 100%;}
  .home-search{display: flex;}
  .home-btning{margin-left: 10px;}
  .classify-lable{margin-top: 20px;}
  .eltab{margin: 5px;}
</style>
