<!--  -->
<template>
  <div class="detailSwiper">
    <!-- <div>轮播图</div> -->
    <div class="lunbotu">
      <img :src="SwiperImage[1]" alt />
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "detailSwiper",
  data() {
    return {};
  },
  props: {
    SwiperImage: {
      type: Array,
      default() {
        return [];
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper;
      }
    },
    mounted() {
      console.log("Current Swiper instance object", this.swiper);
      this.swiper.slideTo(3, 1000, false);
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>

<style scoped>
/* @import url(); 引入css类 */
.lunbotu {
  height: 300px;
  overflow: hidden;
}
.lunbotu img {
  width: 100%;
  /* height: 150px; */
}
</style>