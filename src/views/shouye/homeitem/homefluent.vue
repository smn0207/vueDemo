<template>
    <div class="fluent">
        <div class="fluent_text">本周流行</div>
        <!--<a href="www.baidu.com">-->
            <!--<img src="~assets/img/tabbar/1111.png" alt="">-->
        <!--</a>-->

        <van-swipe :autoplay="3000">
            <van-swipe-item  v-for="(image, index) in imageList" :key="index">
                <img :src="image.image" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>>

<script>

export default {
    name:'fluent',
    props:{
     imageList:Array
    },
    methods:{
        bannerLoad(){
            this.$emit('bannerLoad')
        }
    }
}
</script>>

<style scoped>
.fluent_text{
    font-weight: bolder;
    size: 24px;
    text-align: center;
}
img{
    width: 100%;
}
</style>>
