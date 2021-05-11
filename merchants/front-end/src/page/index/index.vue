<template>
  <div style="position: relative;" v-bind="listrou">
    
    <div class="sidebar-top">
      <div>merchants center</div>
      <div @click="signOut()">exit</div>
    </div>
    <div class="sidebar-cont">
      <div v-for="(item,index) in sidebar" :key="item.id">
        <router-link  :to="{path:item.router,query:{item:item.id}}">
        <div class="sidebar-title" @click="sidebarCli(index)">
          <img :src="item.image" />
          <span :class="{activetext:index == num}">{{item.title}}</span>
          <span class="tips" v-if="item.id == 2 && tiporder === 1">{{orderlist}}</span>
        </div>
        </router-link>
      </div>
    </div>

    
    
    		<router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Utils from '../../api/util.js'
  export default {
      data() {
        return {
           num:1,
           tiporder:0,
           orderlist:0,
           sidebar:[
             {
               'id': 0,
               'image': '',
               'title': '',
               'router':''
             },
             {
               'id': 1,
               'image': require('../../images/home/zhuye.svg'),
               'title': 'merchants set',
               'router':'home'
             },
             
             {
               'id': 2,
               'image': require('../../images/home/youxuan.svg'),
               'title': 'recommend',
               'router':'preferen'
             },
             {
               'id': 3,
               'image': require('../../images/home/caiping.svg'),
               'title': 'food',
               'router':'variety'
             },
             {
               'id': 4,
               'image': require('../../images/home/dingdan.svg'),
               'title': 'order management',
               'router':'order'
             },
             

           ]
        }
      },

      methods:{
        sidebarCli(id){
          console.log(id)
          this.num = id
          
          localStorage.setItem("ids", id)
          if(this.tiporder === 1 && id === 2){
            Utils.$emit('news','msg');
          }
        },

        
        plays(){
          var Audio = this.$refs.audio
          Audio.play()

        },

        
        notiFy() {
          this.$notify.info({
            title: 'mention',
            message: 'you have new order',
            duration:2000,
            position:'bottom-right'
          });
        },

        
        newTips(){
          Utils.$on('neworder', (msg)=> {
                console.log('merchant cancel the order');
                this.tiporder = 0
                this.orderlist = 0
          })
        },

        
        

        
        signOut(){
          localStorage.removeItem("openid")
         
          this.$router.push({name:'login'})
        }
      },

      mounted() {
        this.tongxun()
        this.newTips()
      },

      
      beforeCreate() {
      	
        let ids = localStorage.getItem("ids")
        if(!ids){
          localStorage.setItem("ids", 1)
        }
      },
    
      created() {
        let ids = localStorage.getItem("ids")
        this.num = ids
      },

      computed:{
      		...mapState(['opendata']),
         
          listrou(){
            let ids = this.$route.query.item
            if(ids && ids != undefined){
              localStorage.setItem("ids", ids)
              this.num = ids
            }
          }
      },

    }
</script>

<style scoped="scoped">
  .activetext{color: white !important;}
  .sidebar-top{width: 100%; background: #000000; height: 50px; color: white;
  display: flex; justify-content: space-between;
  align-items: center;
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 99;
  }
  .sidebar-top div:nth-child(1){padding-left: 22px; font-size: 18px;}
  .sidebar-top div:nth-child(2){padding-right: 22px; cursor:pointer}
  .sidebar-cont{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
  background: #000000; width: 180px;
  height: 100vh;
  color: white;
  font-size: 16px;
  overflow-y: auto;}
  .sidebar-title img{width: 18px; height: 18px; padding-right: 7px;}
  .sidebar-title{display: flex; align-items: center;
  height: 50px;
  padding: 0 20px;}
  
  .tips{background: red;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  color: #FFFFFF;
  font-size: 15px;
  margin-left: 10px;}

</style>
