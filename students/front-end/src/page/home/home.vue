<template>
    <div>
        <Top></Top>
        <Classify></Classify>
        <Xuanze></Xuanze>
        <Restaurant></Restaurant>
    </div>

</template>

<script>
    import Top from './components/top'
    import Classify from './components/classify'
    import Xuanze from './components/xuanze'
    import Restaurant from './components/restaurant'

    export default{
        name:'home',
        components:{
            Top,
            Classify,
            Xuanze,
            Restaurant
                
                
                
        }
    }
</script>


<style>


</style>