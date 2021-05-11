<template>
    <div>
      <div class="title">TrojanEats !</div>
      <div class="space"></div>
      <div class="search-view">
			<img src="../../../assets/image/coen/dingwei.svg">
			<span> Element 111</span>
			<span>></span>
	  </div>
      <div class="search-cont">
			<div class="search" @click="search()">
				<img src="../../../assets/image/coen/sousuo.svg" class="search-img">
				<input type="text" placeholder="please input" disabled />
			</div>
		</div>
        
        <div>
            <div v-for="(item,index) in label" :key="index">
                <div class="swiper-item">
               <div v-for="(data,index) in item" :key="index" class="part">
                   
                    <img :src="data.img" class="conten-image">
                    <span class="text-title">{{data.title}}</span>
                   
               </div>
               </div>
            </div>
        </div>
            
           
        
    </div>

</template>

<script>
    export default{
        name:'top',
        data(){
            return{
                label:[
                    [
                    {
                        img: require('../../../assets/image/inster/meishi.png'),
                        title:'food'
                    },
                    {
                        img: require('../../../assets/image/inster/paotui.png'),
                        title:'take out'
                    },
                    {
                        img: require('../../../assets/image/inster/jintie.png'),
                        title:'bonus'
                    },
                    {
                        img: require('../../../assets/image/inster/shuiguo.png'),
                        title: 'fruit'
                    }
                    ],
                    [
                    {
                        img: require('../../../assets/image/inster/xianhua.png'),
                        title:'flower'
                    },
                    {
                        img: require('../../../assets/image/inster/dangao.png'),
                        title:'cake'
                    },
                    {
                        img: require('../../../assets/image/inster/xiaochi.png'),
                        title:'snack'
                    },
                    {
                        img: require('../../../assets/image/inster/yexiao.png'),
                        title:'midnight'
                    }
                    ]
                ]
            }
        }
    }

</script>


<style scoped>
.title{text-align:center;font-weight: bold;font-size: 25px;}
.space{height: 30px;}
.search-view img{width: 25px; height: 25px;}
.search-view{font-size: 20px; font-weight: bold; display: flex; align-items: center; height: 20px;margin-left: 350px;}
.search-cont{display: flex; justify-content: space-between;height: 40px;align-items: center;margin-top: 20px;margin-left: 350px;}
	

.search-img{margin-top: 10px; width: 20px; height: 20px;}

.search{height: 40px; line-height: 40px; width: 70%; display: flex; flex-direction: flex;background: #eff3f4;border-radius: 10rpx;}
.search input{height: 40px; line-height: 40px; width: 70%; font-size: 15px; color: #666666;border-style:hidden;}

.conten-image{width:50px;height: 50px;border-radius: 50px;display: block;}
.text-title{font-size: 20px;}

.swiper-item{display: flex;margin-left: 400px;margin-top: 20px;}
.part{width: 220px;}

</style>