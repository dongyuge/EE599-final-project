<template>
  <div class="ordering">
      
      <div class="home-list" v-bind="upImg">
        <div class="home-title">upload image</div>
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
        <div class="home-title">title</div>
         <el-input v-model="title" placeholder="please input title"></el-input>
      </div>
      
      <div class="home-list">
        <div class="home-title">description</div>
         <el-input v-model="description" placeholder="please input description"></el-input>
      </div>

      
      <div class="home-list">
        <el-row>
          
          <el-button type="success" @click="btNs()">submit</el-button>
          <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
          
          <router-link to="/preferen">
             <el-button type="success">return</el-button>
          </router-link>
          
        </el-row>
        
        
        
      </div>
      
  </div>
</template>

<script>
  import {home} from '../../api/api.js'
  
  import {updatapreferurl} from '../../api/request.js'
  export default{
    data() {
      return {
        title:'',
        description:'',
        fileimg:'',
        files:'',
        ids:'',
        upfile:''
      }
    },
     methods: {
       
        successing(file, fileList){
          this.fileimg = file.url
          console.log(file)
          console.log(fileList)
          this.files = file.raw
        },

        
       async btNs(){
          console.log('提交')
          let list = [
            {"file": this.upfile},
            {"ids": this.ids},
            {"title": this.title},
            {"description": this.description}
          ]
          
          let  uploading = await new this.myreferto(list).appfrom()
          console.log(uploading)
          home(uploading,updatapreferurl)
          .then((res)=>{
            new this.myreferto(list).men()
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
       
       console.log(this.$route.params)
       let dataedit = this.$route.params.datas
       this.fileimg = dataedit.image
       this.title = dataedit.title
       this.description = dataedit.description
       this.ids = dataedit._id
     },

     
     computed:{
       upImg(){
         
         if(this.files != ''){
            
            console.log('changed')
            this.upfile = this.files
         }else{
            this.upfile = this.fileimg
            console.log(this.upfile)
         }
       }
     }


  }
</script>

<style scoped="scoped">
  @import '../../../style/pubiss.css';
  @import '../../../style/table.css';
  
  
</style>
