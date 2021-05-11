<template>
<div>
    <div v-for="(item,index) in takeshop" :key="index" >
        <div class="content-view" >
            <div class="content-img">
                <img :src="item.logo">
            </div>
            <div class="content-title">
                <span class="conteng-take">{{item.shop}}</span>
                <div class="space"></div>
                <div class="conteng-monthly">
                    
                    <span>about {{item.duration}} minutes</span>
                   
                </div>
                 <div class="space"></div>
                <div class="conteng-starting">
                    <span>intial fee {{item.delivering}}$</span>
                    <div class="space"></div>
                    <span>delivery fee {{item.physical}}$</span>
                    <div class="space"></div>
                    <span>average price {{item.capital}}$</span>
                    <div class="space"></div>
                </div>
                <div class="conteng-starting">
                    
                    <span>type: {{item.types}}</span>
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<script>
export default{
    name:'restaurant',
    data(){
        return{
            takeshop:[
					{
						logo: require('../../../assets/image/coen/chick.jpg'),
						shop:'chickfila',
						duration:20,
						delivering:2,
						physical: 9,
						capital:20,
						types:'Chicken'
					},
					{
						logo: require('../../../assets/image/coen/mc.png'),
						shop:'McDonalds',
						duration:15,
						delivering:2,
						physical: 5,
						capital:25,
						types:'Burgers'
					},
					{
						logo: require('../../../assets/image/coen/bbq.jpg'),
						shop:'BBQ',
						duration:20,
						delivering:2,
						physical: 7,
						capital:20,
						types:'BBQ'
					}
				]
        }
    }
}


</script>



<style scoped>
.content-view span{display: block;}
.content-view{display: flex; 
height: 160px !important; overflow: hidden;
border-bottom: 1rpx solid #E4E8EB; 
margin-top:10px;
margin-left: 350px;
color: #898989;
}
.content-img{width: 400px !important; height: 150px !important;
}
.content-img img{width: 150px; height: 150px; border-radius: 10px;}

.content-title{

padding-left: 5px;
font-size: 17px;
height:150px;
}

.conteng-monthly{display: flex; justify-content: space-between;
height: 20px;
line-height: 20px;}

.space{height: 3px;}


</style>