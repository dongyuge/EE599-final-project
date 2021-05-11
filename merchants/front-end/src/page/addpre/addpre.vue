<template>
  <div class="ordering">
      <!-- logo -->
      <div class="home-list">
        <div class="home-title">uplaod picture</div>
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
      <!-- tilte -->
      <div class="home-list">
        <div class="home-title">title</div>
         <el-input v-model="title" placeholder="please input title"></el-input>
      </div>
      <!-- description -->
      <div class="home-list">
        <div class="home-title">description</div>
         <el-input v-model="lable" placeholder="please input description"></el-input>
      </div>

      <!-- submit -->
      <div class="home-list">
        <el-row>
          <el-button type="success" @click="btNs()">submit</el-button>
          <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
          <router-link to="/preferen">
             <el-button type="success">return</el-button>
          </router-link>
        </el-row>
      </div>

  </div>
</template>

<script>
var formdata  = new FormData()
  import { mapState } from 'vuex';
  import {home} from '../../api/api.js'
  
  import {preferurl} from '../../api/request.js'

  export default{
    data() {
      return {
        title:'',
        lable:'',
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

        
        async btNs(){
          let list = [
            {"file": this.files},
            {"title": this.title},
            {"description": this.lable}
          ]

         let  uploading = await new this.myreferto(list).appfrom()

         await home(uploading,preferurl)
          .then((res)=>{
            console.log(uploading.getAll('file'))
           new this.myreferto(list).men()
            console.log(res)
            if(res.data.msg === 'SUCCESS'){
                new this.mytitle(this.$message,'success','uplaod successsfully').funtitle()
                this.title = ''
                this.lable = ''
                this.files = ''
                this.fileimg = ''
            }else{ 
              new this.mytitle(this.$message,'warning',res.data.msg).funtitle()
            }

          })
          .catch((err)=>{
           new this.myreferto(list).men()
            console.log(err)
            new this.mytitle(this.$message,'info','fail to upload').funtitle()
          })
        },


     },


     computed:{
     		...mapState(['opendata'])
     	},

  }
</script>

<style scoped="scoped">
  @import '../../../style/pubiss.css';
  @import '../../../style/table.css';
</style>
