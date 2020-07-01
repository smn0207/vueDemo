<!--  -->
<template>
  <div class="carlist">
    <scroll class="content" ref="Scroll">
      <childlistitem v-for="(item,index) in carList" :key="index" :itemInfo="item" />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scroll from "components/common/scroll/scroll";
import childlistitem from "./childlistitem";
export default {
  name: "carlist",
  components: { scroll, childlistitem },
  computed: {
    ...mapGetters(["carList"])
  },
  activated() {
    // 解决better-scroll的计算高度问题
    console.log(1)
    // console.log(this.$refs.Scroll)
        this.$refs.Scroll.refresh()
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>

<style scoped>
/* @import url(); 引入css类 */
.carlist {
  height: 100vh;
  /* height: calc(100% - 44px - 49px - 40px); */
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  /* height: 100%; */
  overflow: hidden;
}
</style>