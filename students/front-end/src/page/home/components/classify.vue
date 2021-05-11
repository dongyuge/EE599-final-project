<template>
<div>
        <div class="prefer-title">
			Recommend for you
		</div>
    

    <div  class="scroll" >
			<div class="prefer-dis">
				<div v-for="(item,index) in preferdata" :key="index">
					<div class="prefer-view">
						<img :src="item.image">
						<div>{{item.title}}</div>
					</div>
					
				</div>
				
			</div>
			
	</div>
    <div class="bottom-title">nearby restaurants</div>
</div>
</template>

<script>
 export default{
     name:'classify',
     data(){
         return{
             preferdata:[
                 {
                     image: require('../../../assets/image/coen/food.jpg'),
                     title:'preference food'
                 },
                 {
                     image: require('../../../assets/image/coen/resturanrant.jpg'),
                     title:'good restaurants'
                 },
                 {
                     image: require('../../../assets/image/coen/good-rate.jpg'),
                     title:'high rate'
                 }
             ]
         }
     }
 }

</script>


<style scoped>
.prefer-title{font-size: 20px;  height: 25px; line-height: 30px;
		margin-bottom: 20px;margin-top: 20px;margin-left: 355px;font-weight: bold;}


.prefer-dis{display: flex;margin-left: 350px;}
.prefer-view img{width: 200px; height: 150px; border-radius: 8px;
		}	

.prefer-view{height: 200px; width: 300px;}

.bottom-title{margin-left: 350px;font-size:25px;}
</style>