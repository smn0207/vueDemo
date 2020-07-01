<template>
  <div class="cat">
    <!-- 导航 -->
    <navbar class="nav-bar">
      <div slot="center">购物车({{lenght}})</div>
    </navbar>
<!-- 商品列表 -->
    <carList />
    <!-- 底部汇总 -->
    <carbuttonbar />
  </div>
</template>

<script>
import navbar from "components/common/navbar/NavBar";
import carList from "./childComps/cartList";
import carbuttonbar from "./childComps/carbuttonbar";

// vuex 中的getters转换成计算属性

import { mapGetters } from "vuex";
export default {
  name: "gouwuche",
  components: { navbar, carList, carbuttonbar },
  data() {
    return {};
  },
  computed: {
    //getter中的方法转换成计算属性  两种语法
    // ...mapGetters(['cartLength','carList'])
    ...mapGetters({
      lenght: "cartLength" //可以自定义变量
    })
  }
};
</script>>

<style scoped>
.nav-bar {
  background-color: var(--color-hight-text);
  color: white;
  font-weight: bolder;
}
</style>